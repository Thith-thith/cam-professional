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