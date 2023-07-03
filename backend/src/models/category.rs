use bson::{oid::ObjectId, DateTime};
use serde::{Deserialize,Serialize};
use async_graphql::{ InputObject,ID,Object};

#[derive(Debug, Clone, Deserialize,Serialize)]

// ===========>Model Declare<==================
pub struct CategoryModel {
    pub _id:ObjectId,
    pub name:String,
    pub updated_at:DateTime,
    pub created_at:DateTime
}



#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CategoryGQL {
    pub id: ID,
    pub name:String,
    pub created_at:String,
    pub updated_at:String,
}

impl CategoryModel {
    pub fn new() -> Self {
       CategoryModel { _id: bson::oid::ObjectId::new(), name: String::from(""), updated_at: DateTime::now(), created_at: DateTime::now() }
    }
    pub fn to_norm(&self) -> CategoryGQL {
        CategoryGQL { id: ID::from(self._id.to_owned()), name: (self.name.to_owned()), created_at: (self.created_at.to_owned().to_string()), updated_at: (self.updated_at.to_owned().to_string()) }
    }
}

//==============> Input type Mutation <=============
#[derive(InputObject)]
pub struct CreateCategory {
    pub name:String,
}


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