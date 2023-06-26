// use actix_service::{Service, Transform};
// use actix_web::{dev::ServiceRequest, dev::ServiceResponse, Error,HttpResponse};
// // use futures::future::{ok, Ready};
// use jsonwebtoken::{decode, errors::ErrorKind, DecodingKey, Validation};
// use std::pin::Pin;
// use std::task::{Context, Poll};
// use std::future::{ready, Ready};
// // Define your claims structure
// #[derive(Debug, serde::Serialize, serde::Deserialize)]
// struct Claims {
//     sub: String,
//     role: String,
//     // Add more fields as per your requirements
// }

// pub struct AuthMiddleware;

// impl<S, B> Transform<S> for AuthMiddleware
// where
//     S: Service<Request = ServiceRequest, Response = ServiceResponse<B>, Error = Error>,
//     S::Future: 'static,
//     B: 'static,
// {
//     type Request = ServiceRequest;
//     type Response = ServiceResponse<B>;
//     type Error = Error;
//     type Transform = AuthMiddlewareMiddleware<S>;
//     type InitError = ();
//     type Future = Ready<Result<Self::Transform, Self::InitError>>;

//     fn new_transform(&self, service: S) -> Self::Future {
//         ok(AuthMiddlewareMiddleware { service })
//     }
// }

// pub struct AuthMiddlewareMiddleware<S> {
//     service: S,
// }

// impl<S, B> Service for AuthMiddlewareMiddleware<S>
// where
//     S: Service<Request = ServiceRequest, Response = ServiceResponse<B>, Error = Error>,
//     S::Future: 'static,
//     B: 'static,
// {
//     type Request = ServiceRequest;
//     type Response = ServiceResponse<B>;
//     type Error = Error;
//     type Future = Pin<Box<dyn futures::Future<Output = Result<Self::Response, Self::Error>>>>;

//     fn poll_ready(&mut self, cx: &mut Context<'_>) -> Poll<Result<(), Self::Error>> {
//         self.service.poll_ready(cx)
//     }

//     fn call(&mut self, req: ServiceRequest) -> Self::Future {
//         let token = match req.headers().get("Authorization") {
//             Some(header_value) => {
//                 let auth_header = header_value.to_str().unwrap();
//                 let parts: Vec<&str> = auth_header.split_whitespace().collect();
//                 if parts.len() == 2 && parts[0] == "Bearer" {
//                     parts[1]
//                 } else {
//                     return Box::pin(async move {
//                         Ok(req.into_response(
//                             HttpResponse::Unauthorized().finish().into_body(),
//                         ))
//                     });
//                 }
//             }
//             None => {
//                 return Box::pin(async move {
//                     Ok(req.into_response(
//                         HttpResponse::Unauthorized().finish().into_body(),
//                     ))
//                 });
//             }
//         };

//         let secret = "your_secret_key"; // Replace with your secret key for JWT

//         match decode::<Claims>(
//             token,
//             &DecodingKey::from_secret(secret.as_ref()),
//             &Validation::default(),
//         ) {
//             Ok(token_data) => {
//                 // Access the authenticated user's claims from `token_data.claims`
//                 // Perform additional checks like role validation

//                 // Example: Checking if user has admin role
//                 if token_data.claims.role == "admin" {
//                     // User has the required role, proceed with the request
//                     let fut = self.service.call(req);
//                     Box::pin(async move { fut.await })
//                 } else {
//                     // User does not have the required role, return unauthorized response
//                     Box::pin(async move {
//                         Ok(req.into_response(
//                             HttpResponse::Forbidden().finish().into_body(),
//                         ))
//                     })
//                 }
//             }
//             Err(err) => match *err.kind() {
//                 ErrorKind::ExpiredSignature => {
//                     // Handle token expiration error
//                     Box::pin(async move {
//                         Ok(req.into_response(
//                             HttpResponse::Unauthorized().finish().into_body(),
//                         ))
//                     })
//                 }
//                 _ => {
//                     // Handle other token decoding errors
//                     Box::pin(async move {
//                         Ok(req.into_response(
//                             HttpResponse::Unauthorized().finish().into_body(),
//                         ))
//                     })
//                 }
//             },
//         }
//     }
// }
