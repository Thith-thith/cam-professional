pub struct Message {
    pub success: bool,
    pub message: String,
}

#[async_graphql::Object]
impl Message {
    async fn message(&self) -> &str {
        &self.message
    }
    async fn success(&self) -> &bool {
        &self.success
    }
}

pub struct Token {
    pub token: String,
}
#[async_graphql::Object]
impl Token {
    async fn token(&self) -> &str {
        &self.token
    }
}
