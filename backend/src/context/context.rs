
use mongodb::{Client};

#[derive(Debug)]
pub struct AppContext {
    // pub db_pool: Database,
    pub db_pool: Client,
}

#[derive(Debug, PartialEq)]
pub struct Token(pub String);
