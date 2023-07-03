use async_graphql::*;
use bson::{doc, DateTime,Bson};
use crate::context::context::AppContext;
use crate::models::category::{CreateCategory, CategoryModel};
use crate::utils::responder::Message;
extern crate serde_json;

pub struct MutationRoot;

#[Object]
impl MutationRoot {  
   async fn hi(&self) -> &str {
        "Hello, World!"
    }
    //=================>create category<============
    async fn create_category (
        &self,
        ctx: &Context<'_>,
        input:CreateCategory,
    ) -> FieldResult<Message>{
        let db = &ctx.data_unchecked::<AppContext>().db_pool.clone();
        let col = db.database("rustecom").collection("categories");
        let exist_name = col.find_one(doc! {"name":input.name.clone()}, None).await.unwrap();
        match exist_name {
            Some(_) => Err(FieldError::from("this name is already exist")),
            None =>{ 
            let new_category = doc! {
            "name":input.name,
            "created_at":DateTime::now(),
            "updated_at":DateTime::now(),
        };
        let result = col.insert_one(new_category, None).await.unwrap();
        Ok(Message { success: true, message: format!("test created with id: {:?}", result), })
            }
        }
    }
    //=================>update category by id<============
     async fn update_category (
        &self,
        ctx:&Context<'_>,
        id:String,
        name:String,
     ) -> FieldResult<Message> {
       let db = &ctx.data_unchecked::<AppContext>().db_pool.clone();
        let col = db.database("rustecom").collection("categories");
        let exist_name = col.find_one(doc! {"name":name.clone()}, None).await.unwrap();
         let converted_id = match bson::oid::ObjectId::parse_str(&id) {
            Ok(data) => data,
            Err(_) => return Err(FieldError::from("Not a valid id")),
        };
        match exist_name {
            Some(_) => Err(FieldError::from("this name is already exist")),
            None =>{
                let cursor = col.
                find_one_and_update(doc! {"_id":converted_id},doc! {"$set":{"name":name.clone()}}, None).await?;
                let mut categorys : CategoryModel = CategoryModel::new();

                if let Some(doc) = cursor {
                    categorys = bson::from_bson(Bson::Document(doc))?;
                }
                //return data
                match categorys._id.to_string() == "".to_string() {
                    true => Err(FieldError::from("id not found")),
                    false =>  Ok(Message { success: true, message: format!("update successfully") })
                }
            }
        }
     }
}