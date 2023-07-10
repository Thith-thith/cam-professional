use crate::context::context::AppContext;
use crate::models::category::{CategoryModel, CreateCategory};
use crate::models::user::{Claims, User};
use crate::utils::auth::TokenPayload;
use crate::utils::responder::{Message, Token};

use async_graphql::{Context, Error, FieldError, FieldResult, Object};
use bcrypt::{hash, verify};
use bson::{doc, Bson, DateTime};
use chrono::{Duration, Utc};
use jsonwebtoken::{encode, EncodingKey, Header};
use mongodb::Collection;

pub struct MutationRoot;

#[Object]
impl MutationRoot {
    async fn hi(&self) -> &str {
        "Hello, World!"
    }
    //===============>create user <=====================
    async fn sign_up(
        &self,
        ctx: &Context<'_>,
        fullname: String,
        email: String,
        password: String,
    ) -> FieldResult<Message> {
        let db = &ctx.data_unchecked::<AppContext>().db_pool.clone();
        let col = db.database("rustecom").collection("users");

        //check if email is valid
        match col
            .find_one(doc! {"email":email.clone()}, None)
            .await
            .unwrap()
        {
            Some(_) => return Err(FieldError::from("this name is already exist")),
            _ => (),
        }
        //Hash the password using bcrypt
        let hashpassword = match hash(password.clone(), bcrypt::DEFAULT_COST) {
            Ok(hashed) => hashed,
            Err(_) => return Err(FieldError::from("server error")),
        };
        //create a new user document
        let new_user = doc! {
         "fullname":fullname.clone(),
         "email":email.clone(),
         "role":"user".to_string(),
         "password":hashpassword,
         "created_at":bson::DateTime::now(),
         "updated_at":bson::DateTime::now(),
        };
        let result = col.insert_one(new_user, None).await.unwrap();
        Ok(Message {
            success: true,
            message: format!("Sign up Successfully {:?}", result),
        })
    }

    //===============>user sign in <=====================

    async fn sign_in(
        &self,
        ctx: &Context<'_>,
        email: String,
        password: String,
    ) -> FieldResult<Token> {
        let secret_key = std::env::var("JWT_SECRET").unwrap();
        let key = format!("{}", secret_key);

        let db = &ctx.data_unchecked::<AppContext>().db_pool.clone();
        let col: Collection<User> = db.database("rustecom").collection("users");

        if let Ok(Some(user)) = col.find_one(doc! {"email":email}, None).await {
            //verify password
            if let Ok(valid) = verify(&password, &user.password) {
                if valid {
                    //Generate JWT Token
                    let token = encode(
                        &Header::default(),
                        &Claims {
                            id: user._id.to_string(),
                            fullname: user.fullname.clone(),
                            role: user.role.clone(),
                            exp: (Utc::now() + Duration::hours(24)).timestamp() as usize,
                        },
                        &EncodingKey::from_secret(key.as_ref()),
                    )
                    .unwrap();
                    println!("{}", &token);
                    // return Ok(token.to_string());
                    return Ok(Token { token });
                }
            }
        }
        return Ok(Token {
            token: "is error".to_string(),
        });
    }

    //=================>create category<============
    async fn create_category(
        &self,
        ctx: &Context<'_>,
        input: CreateCategory,
    ) -> FieldResult<Message> {
        let decoded = &ctx.data_opt::<TokenPayload>().to_owned();
        println!("hello this is decoded{:#?}", decoded);
        let db = &ctx.data_unchecked::<AppContext>().db_pool.clone();
        let col = db.database("rustecom").collection("categories");

        if let Some(user) = decoded {
            let exist_name = col
                .find_one(doc! {"name":input.name.clone()}, None)
                .await
                .unwrap();
            match exist_name {
                Some(_) => Err(FieldError::from("this name is already exist")),
                None => {
                    let new_category = doc! {
                        "name":input.name,
                        "created_at":DateTime::now(),
                        "updated_at":DateTime::now(),
                    };
                    let result = col.insert_one(new_category, None).await.unwrap();
                    Ok(Message {
                        success: true,
                        message: format!("test created with id: {:?}", result),
                    })
                }
            }
        } else {
            Err(Error::new("Unauthorized, Logged in required!"))
        }
    }
    //=================>update category by id<============
    async fn update_category(
        &self,
        ctx: &Context<'_>,
        id: String,
        name: String,
    ) -> FieldResult<Message> {
        let db = &ctx.data_unchecked::<AppContext>().db_pool.clone();
        let col = db.database("rustecom").collection("categories");
        let exist_name = col
            .find_one(doc! {"name":name.clone()}, None)
            .await
            .unwrap();
        let converted_id = match bson::oid::ObjectId::parse_str(&id) {
            Ok(data) => data,
            Err(_) => return Err(FieldError::from("Not a valid id")),
        };
        match exist_name {
            Some(_) => Err(FieldError::from("this name is already exist")),
            None => {
                let cursor = col
                    .find_one_and_update(
                        doc! {"_id":converted_id},
                        doc! {"$set":{"name":name.clone()}},
                        None,
                    )
                    .await?;
                let mut categorys: CategoryModel = CategoryModel::new();

                if let Some(doc) = cursor {
                    categorys = bson::from_bson(Bson::Document(doc))?;
                }
                //return data
                match categorys._id.to_string() == "".to_string() {
                    true => Err(FieldError::from("id not found")),
                    false => Ok(Message {
                        success: true,
                        message: format!("update successfully"),
                    }),
                }
            }
        }
    }
}
