use async_graphql::{Object, Context,Result};
use futures_util::TryStreamExt;


use crate::{types::category_type::CategoryGQL};
use crate::context::context::AppContext;

pub struct QueryRoot;


#[Object]
impl QueryRoot {
    async fn hello(&self) -> &str {
        "Hello, World!"
    }
    async fn get_categoies(&self, ctx: &Context<'_>,) -> Result<Vec<CategoryGQL>>{
    let db = &ctx.data_opt::<AppContext>().to_owned().unwrap();
    let col = db.db_pool.collection("categories");
    let mut cursor = col.find(None, None).await.expect("Error getting list of categories");
    let mut categories : Vec<CategoryGQL> = Vec::new();
    while let Some(category) = cursor.try_next().await.expect("Error mapping throught cursor"){
        categories.push(category)
    }
      Ok(categories)  
    
    }
}