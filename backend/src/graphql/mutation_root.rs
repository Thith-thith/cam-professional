use async_graphql::*;
use bson::doc;
// use crate::{types::category_type::CategoryGQL};
use crate::context::context::AppContext;
use crate::utils::responder::Message;
extern crate serde_json;

pub struct MutationRoot;
#[Object]
impl MutationRoot {  
   async fn hi(&self) -> &str {
        "Hello, World!"
    }
    async fn create_category (
        &self,
        ctx: &Context<'_>,
        name:String,
    ) -> Result<Message>{
        let db = &ctx.data_unchecked::<AppContext>().db_pool.clone();
        let col = db.database("rustecom").collection("category");
        let new_category = doc! {
            "name":name.to_string()
        };
        let result = col.insert_one(new_category, None).await.unwrap();
       Ok(Message { success: true, message: format!("test created with id: {:?}", result), })
    }
}