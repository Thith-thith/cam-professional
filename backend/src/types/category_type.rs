use async_graphql::{ID, Object};
use serde::{Deserialize, Serialize};
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CategoryGQL {
    #[serde(rename = "_id")]
    pub id: ID,
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
}