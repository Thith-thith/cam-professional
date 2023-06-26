use async_graphql::{ Object, InputObject,ID};
// use bson::oid::ObjectId;
use serde::{Deserialize, Serialize};
// use crate::models::user::User;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UserGQL {
    pub id:ID,
    pub fullname:String,
    pub password:String,
    pub email:String,
}

#[derive(InputObject)]
pub struct Signup {
    pub fullname:String,
    pub email:String,
    pub password:String,
}


impl UserGQL {
    pub fn _new() -> Self {
        UserGQL{
            // id:Some(ObjectId::new()),
            id:async_graphql::ID(String::from("")),
            fullname:String::from(""),
            email:String::from(""),
            password:String::from("")
        }
    }
}
#[Object]
impl UserGQL{
    // async fn id(&self) -> &str {
    //     &self.id
    // }
    async fn password(&self) -> &str {
        &self.password
    }
    async fn email(&self) -> &str {
        &self.email
    }
    async fn fullname(&self) -> &str {
        &self.fullname
    }
}