use async_graphql::*;
use bson::{doc, DateTime};
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
        // emai:String,
        // created_ad:Option<DateTime>,
        // updated_at:Option<DateTime>
    ) -> FieldResult<Message>{
        // let db = &ctx.data_unchecked::<AppContext>().db_pool.clone();
        // let col = db.database("rustecom").collection("category");
        let db = &ctx.data_opt::<AppContext>().to_owned().unwrap();
        let col = db.db_pool.collection("categories");
        // let col = db.db_pool.database("rustecom").collection("category");

        let exist_name = col.find_one(doc! {"name":name.clone()}, None).await.unwrap();
        match exist_name {
            Some(_) => Err(FieldError::from("this name is already exist")),
            None =>{ 
            let new_category = doc! {
            "name":name.to_string(),
            "created_at":DateTime::now(),
            "updated_at":DateTime::now(),
        };
        let result = col.insert_one(new_category, None).await.unwrap();
        Ok(Message { success: true, message: format!("test created with id: {:?}", result), })
            }
        }
    }
}