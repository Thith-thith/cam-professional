use bson::{oid::ObjectId, DateTime};
use serde::{Deserialize,Serialize};



#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CategoryModel {
    pub _id:ObjectId,
    pub name:String,
    pub updated_at:Option<DateTime>,
    pub created_at:Option<DateTime>
}

impl CategoryModel {
    pub fn _new() ->Self {
        CategoryModel { _id: bson::oid::ObjectId::new(), name: String::from(""), updated_at: None, created_at: None }
    }
}