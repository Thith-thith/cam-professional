
mod query_root;
mod mutation_root;
use async_graphql::{Schema, EmptySubscription};
pub use query_root::QueryRoot;
pub use mutation_root::MutationRoot;
pub type ProductSchema = Schema<QueryRoot,MutationRoot,EmptySubscription>;