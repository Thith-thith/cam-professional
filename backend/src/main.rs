
mod db;
mod models;
mod routes;
mod middlewares;
mod graphql;
mod context;
mod types;
mod utils;



use actix_web::{ guard,web,middleware, App, HttpServer,HttpResponse,Result};
use context::AppContext;
use graphql::ProductSchema;
use mongodb::Client;
use std::env;
use crate::db::db_connection::db_pool;
use routes::user::{register, login};
use async_graphql::{http::GraphiQLSource, EmptySubscription, Schema};
use async_graphql_actix_web::{GraphQLRequest, GraphQLResponse};
use crate::graphql::{QueryRoot,MutationRoot};


// ============>Graphql implement<<=============
async fn index(pool:web::Data<Client>,schema: web::Data<ProductSchema>, req: GraphQLRequest) -> GraphQLResponse {
    let context = AppContext {
        db_pool:pool.get_ref().to_owned(),
    };
    let mut request = req.into_inner();
    request = request.data(context);
    schema.execute(request).await.into()
    // schema.execute(req.into_inner()).await.into()
}

async fn index_graphiql() -> Result<HttpResponse> {
    Ok(HttpResponse::Ok()
        .content_type("text/html; charset=utf-8")
        .body(GraphiQLSource::build().endpoint("/").finish()))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {

 let schema = Schema::build(QueryRoot, MutationRoot, EmptySubscription).finish();
    println!("GraphiQL IDE: http://localhost:8080");
   let database = db_pool().await.unwrap();
    // init logger middleware
    env::set_var("RUST_LOG", "actix_web=debug,actix_server=info");
    env_logger::init();
   //Start Actix server
   HttpServer::new(move || {
    App::new()
     .app_data(web::Data::new(schema.clone()))
            .service(web::resource("/").guard(guard::Post()).to(index))
            .service(web::resource("/graphiql").guard(guard::Get()).to(index_graphiql))
    .service(register)
    .service(login)
    .app_data(web::Data::new(database.clone()))
    .wrap(middleware::Logger::default())
   })
   .bind("127.0.0.1:8080")?
    .run()
    .await
}