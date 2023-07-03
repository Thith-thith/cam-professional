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
use actix_web::{guard, middleware, web, App, HttpResponse, HttpServer, Result};
use async_graphql::{http::GraphiQLSource, EmptySubscription, Schema};
use async_graphql_actix_web::{GraphQLRequest, GraphQLResponse};
use context::AppContext;
use graphql::ProductSchema;
use routes::user::{login, register};
use std::env;

// ============>Graphql implement<<=============

async fn index(schema: web::Data<ProductSchema>, req: GraphQLRequest) -> GraphQLResponse {
    schema.execute(req.into_inner()).await.into()
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
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
