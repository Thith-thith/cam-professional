use bson::{oid::ObjectId, DateTime};
use serde::{Deserialize,Serialize};



#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CategoryModel {
    pub _id:ObjectId,
    pub name:String,
    pub updated_at:DateTime,
    pub created_at:DateTime
}

impl CategoryModel {
    pub fn _new() ->Self {
        CategoryModel { _id: bson::oid::ObjectId::new(), name: String::from(""), updated_at: DateTime::now(), created_at: DateTime::now() }
    }
}