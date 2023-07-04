use crate::models::user::User;
use ::mongodb::Client;
use actix_web::{
    post,
    web::{self, Json},
    HttpResponse, Responder,
};
use bcrypt::{hash, verify};
use chrono::{Duration, Utc};
use jsonwebtoken::{encode, EncodingKey, Header};
use mongodb::{bson::doc, bson::oid::ObjectId, Collection};
use serde::{Deserialize, Serialize};
use serde_json::json;

#[derive(Debug, Deserialize)]
pub struct RegisterRequest {
    pub email: String,
    pub fullname: String,
    pub password: String,
    // pub role:String,
}

#[derive(Serialize)]
pub struct RegsiterRespon {
    pub status: String,
    pub msg: String,
}

#[post("/register")]
async fn register(db: web::Data<Client>, req: Json<RegisterRequest>) -> impl Responder {
    let col = db.database("rustecom").collection("users");

    //check if email is valid
    match col.find_one(doc! {"email":&req.email}, None).await.unwrap() {
        Some(_) => {
            return HttpResponse::BadRequest().json(&RegsiterRespon {
                status: "400".to_string(),
                msg: "Email already exist!".to_string(),
            })
        }
        _ => (),
    }

    // Hash the password using bcrypt
    let hashpassword = match hash(&req.password, bcrypt::DEFAULT_COST) {
        Ok(hashed) => hashed,
        Err(_) => return HttpResponse::InternalServerError().finish(),
    };

    // Create a new user document
    let new_user = User {
        _id: ObjectId::new(),
        fullname: req.fullname.clone(),
        email: req.email.clone(),
        role: "user".to_string(),
        password: hashpassword,
        created_at: bson::DateTime::now().into(),
        updated_at: bson::DateTime::now().into(),
    };
    let result = col.insert_one(new_user, None).await;

    let message_response = RegsiterRespon {
        status: "200".to_string(),
        msg: "Register successfully".to_string(),
    };
    match result {
        Ok(_) => HttpResponse::Ok().json(message_response),
        Err(err) => {
            println!("Error while getting, {:?}", err);
            HttpResponse::InternalServerError().finish()
        }
    }
}

#[derive(Debug, Deserialize)]
pub struct LoginRequest {
    pub email: String,
    pub password: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Claims {
    pub sub: Option<ObjectId>,
    pub fullname: String,
    pub exp: usize,
}

#[post("/login")]
async fn login(db: web::Data<Client>, req: Json<LoginRequest>) -> impl Responder {
    let secret_key = std::env::var("JWT_SECRET").unwrap();
    let key = format!("{}", secret_key);
    let col: Collection<User> = db.database("rustecom").collection("users");
    let data = &LoginRequest {
        email: req.email.clone(),
        password: req.password.clone(),
    };
    // check if email valid
    if let Ok(Some(user)) = col.find_one(doc! {"email":&data.email.clone()}, None).await {
        //verify password
        if let Ok(valid) = verify(&req.password, &user.password) {
            if valid {
                //Generate JWT Token
                let token = encode(
                    &Header::default(),
                    &Claims {
                        sub: Some(user._id.clone()),
                        fullname: user.fullname.clone(),
                        exp: (Utc::now() + Duration::hours(24)).timestamp() as usize,
                    },
                    &EncodingKey::from_secret(key.as_ref()),
                )
                .unwrap();
                return HttpResponse::Ok().json(json!({ "token": token }));
            }
        }
    }
    HttpResponse::Unauthorized().json(json!("error"))
}
