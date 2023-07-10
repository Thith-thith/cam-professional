use actix_web::http::header::HeaderMap;

pub fn get_token_from_headers(headers: &HeaderMap) -> Option<String> {
    headers
        .get("Authorization")
        .and_then(|value| value.to_str().map(|s| (s.to_string())).ok())
}
