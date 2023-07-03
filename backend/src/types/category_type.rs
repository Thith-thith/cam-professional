use async_graphql::{ID, Object};
use bson::{DateTime};
use serde::{Deserialize, Serialize};
// use crate::models::category::CategoryModel;


#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CategoryGQL {
    pub id: ID,
    pub name:String,
    pub created_at:String,
    pub updated_at:String,
}


impl CategoryGQL {
    pub fn _new() -> Self {
        CategoryGQL{
            id:ID::from(""),
            name:String::from(""),
            created_at: DateTime::now().to_string(),
            updated_at: DateTime::now().to_string(),
        }
    }
}

// impl CategoryModel {
//     pub fn _new() ->  CategoryModel{
//         CategoryModel { _id:ObjectId::new(), name: String::from(""), updated_at: DateTime::now(), created_at: DateTime::now() }
//     }

//     pub fn to_norm(&self) -> CategoryGQL {
//         CategoryGQL { id: ID::from(self._id.to_owned()), name: (self.name.to_owned()), created_at: (self.created_at.to_owned().to_string()), updated_at: (self.updated_at.to_owned().to_string()) }
//     }
// }

#[Object]
impl CategoryGQL{
    async fn id(&self) -> &str{
        &self.id
    }
    async fn name(&self) -> &str{
        &self.name
    }
    async fn created_at(&self) ->&str{
        &self.created_at
    }
     async fn updated_at(&self) ->&str{
        &self.updated_at
    }
}