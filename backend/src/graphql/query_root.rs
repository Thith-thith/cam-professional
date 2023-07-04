use async_graphql::{ Object, Context, FieldResult };
use bson::Bson;
use futures_util::StreamExt;

use crate::models::category::{ CategoryModel, CategoryGQL };
// use crate::{types::category_type::CategoryGQL};
use crate::context::context::AppContext;

pub struct QueryRoot;

#[Object]
impl QueryRoot {
    async fn hello(&self) -> &str {
        "Hello, World!"
    }

    async fn get_categoies(&self, ctx: &Context<'_>) -> FieldResult<Vec<CategoryGQL>> {
        let db = &ctx.data_unchecked::<AppContext>().db_pool.clone();
        let col = db.database("rustecom").collection("categories");
        let mut cursors = col.find(None, None).await.expect("error getting list Categories");
        let mut cates: Vec<CategoryGQL> = Vec::new();
        while let Some(result) = cursors.next().await {
            match result {
                Ok(document) => {
                    let categorys: CategoryModel = bson::from_bson(Bson::Document(document))?;
                    cates.push(categorys.to_norm());
                }
                Err(e) => {
                    return Err(e.into());
                }
            }
        }
        Ok(cates)
    }
}
