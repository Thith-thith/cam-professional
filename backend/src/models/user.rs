// use chrono::Utc;
use async_graphql::{Object, ID};
use mongodb::bson::{doc, oid::ObjectId, DateTime};
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct User {
    // #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    pub _id: ObjectId,
    pub fullname: String,
    pub email: String,
    pub password: String,
    pub role: String,
    // #[serde(with = "bson::serde_helpers::chrono_datetime_as_bson_datetime")]
    pub created_at: DateTime,
    // #[serde(with = "bson::serde_helpers::chrono_datetime_as_bson_datetime")]
    pub updated_at: DateTime,
}

// ============>>Graphql Struct<==============
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UserGQL {
    pub id: ID,
    pub fullname: String,
    pub email: String,
    pub password: String,
    pub role: String,
    pub created_at: String,
    pub updated_at: String,
}

impl User {
    pub fn new() -> Self {
        User {
            _id: ObjectId::new(),
            fullname: String::from(""),
            email: String::from(""),
            password: String::from(""),
            role: String::from(""),
            created_at: DateTime::now(),
            updated_at: DateTime::now(),
        }
    }

    pub fn to_norm(&self) -> UserGQL {
        UserGQL {
            id: ID::from(self._id.to_owned()),
            fullname: self.fullname.to_owned(),
            email: self.email.to_owned(),
            password: self.password.to_owned(),
            role: self.role.to_owned(),
            created_at: self.updated_at.to_owned().to_string(),
            updated_at: self.updated_at.to_owned().to_string(),
        }
    }
}

#[Object]
impl UserGQL {
    async fn id(&self) -> &str {
        &self.id
    }
    async fn role(&self) -> &str {
        &self.role
    }
    async fn fullname(&self) -> &str {
        &self.fullname
    }
    async fn email(&self) -> &str {
        &self.email
    }
    async fn created_at(&self) -> &str {
        &self.created_at
    }
    async fn updated_at(&self) -> &str {
        &self.updated_at
    }
}
#[derive(Debug, Serialize, Deserialize)]
pub struct Claims {
    pub id: String,
    pub fullname: String,
    pub role: String,
    pub exp: usize,
}
