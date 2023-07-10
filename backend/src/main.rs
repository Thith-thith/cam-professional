mod context;
mod db;
mod graphql;
mod middlewares;
mod models;
mod routes;
// mod types;
mod utils;

use crate::db::db_connection::db_pool;
use crate::graphql::{MutationRoot, QueryRoot};
use crate::utils::handler::get_token_from_headers;
use actix_cors::Cors;
use actix_web::{guard, http, middleware, web, App, HttpRequest, HttpResponse, HttpServer, Result};
use async_graphql::{http::GraphiQLSource, EmptySubscription, Schema};
use async_graphql_actix_web::{GraphQLRequest, GraphQLResponse};
use context::AppContext;
use graphql::ProductSchema;
use routes::user::{login, register};
use std::env;
use utils::auth::verify_token;

// ============>Graphql implement<<=============

// async fn index(schema: web::Data<ProductSchema>, req: GraphQLRequest) -> GraphQLResponse {
//     schema.execute(req.into_inner()).await.into()
// }

async fn index(
    schema: web::Data<ProductSchema>,
    req: HttpRequest,
    gql_request: GraphQLRequest,
) -> GraphQLResponse {
    let mut request = gql_request.into_inner();
    println!("{:?}", get_token_from_headers(req.headers()));
    if let Some(token) = get_token_from_headers(req.headers()) {
        let decoded = verify_token(token.clone());
        if let Some(t) = decoded {
            request = request.data(t).data(token);
        } else {
            request = request.data(token);
        }
    } else {
        request = request.data("");
    }
    schema.execute(request).await.into()
}
async fn index_graphiql() -> Result<HttpResponse> {
    Ok(HttpResponse::Ok()
        .content_type("text/html; charset=utf-8")
        .body(GraphiQLSource::build().endpoint("/").finish()))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let databases = db_pool().await.unwrap();
    let schema = Schema::build(QueryRoot, MutationRoot, EmptySubscription)
        .data(AppContext {
            db_pool: { databases.to_owned() },
        })
        .finish();
    println!("GraphiQL IDE: 127.0.0.1:8080/graphiql");

    // ============> init logger middleware <=================
    env::set_var("RUST_LOG", "actix_web=debug,actix_server=info");
    env_logger::init();
    //============>Start Actix server<==============
    HttpServer::new(move || {
        let cors = Cors::default()
            .allowed_origin("http://localhost:3000")
            .allow_any_origin()
            .allowed_methods(vec!["GET", "POST"])
            .allowed_headers(vec![http::header::AUTHORIZATION, http::header::ACCEPT])
            .allowed_header(http::header::CONTENT_TYPE)
            .supports_credentials()
            .max_age(3600);
        App::new()
            .app_data(web::Data::new(schema.clone()))
            .service(web::resource("/").guard(guard::Post()).to(index))
            .service(
                web::resource("/graphiql")
                    .guard(guard::Get())
                    .to(index_graphiql),
            )
            .service(register)
            .service(login)
            .app_data(web::Data::new(databases.clone()))
            .wrap(middleware::Logger::default())
            .wrap(cors)
            .wrap(Cors::permissive())
            .wrap(middleware::Logger::new("%a %{User-Agent}i"))
    })
    .workers(2)
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
