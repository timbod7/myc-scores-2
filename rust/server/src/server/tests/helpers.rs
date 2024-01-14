use rand::Rng;
use serde::de::DeserializeOwned;
use serde::Serialize;
use sqlx::postgres::PgPoolOptions;
use sqlx::Executor;

use crate::adl::gen::common::http::{HttpPost, Unit};
use crate::adl::gen::protoapp::apis;
use crate::adl::gen::protoapp::config::server::{DbConnectionConfig, ServerConfig};
use crate::server::OServer;

pub struct DbTestEnv {
    pub pool: sqlx::PgPool,
    pub schema: String,
}

impl DbTestEnv {
    pub async fn new() -> Self {
        let db_connection_url =
            std::env::var("DB_CONNECTION_URL").expect("DB_CONNECTION_URL environment variable");
        let pool0 = PgPoolOptions::new()
            .max_connections(5)
            .connect(&db_connection_url)
            .await
            .expect("db connection to succeed");

        let mut rng = rand::thread_rng();
        let schema = format!("test_{}", rng.gen::<u64>());

        sqlx::query(&format!("DROP SCHEMA IF EXISTS {} CASCADE", schema))
            .execute(&pool0)
            .await
            .expect("new test db schema to be dropped if present");

        sqlx::query(&format!("CREATE SCHEMA {}", schema))
            .execute(&pool0)
            .await
            .expect("new test db schema to be created");

        // Create a db pool where connections go to the new schema
        let pool = {
            let schema = schema.clone();
            PgPoolOptions::new()
                .max_connections(5)
                .after_connect(move |conn, _meta| {
                    let schema = schema.clone();
                    Box::pin(async move {
                        conn.execute(format!("SET search_path = '{}';", schema).as_ref())
                            .await
                            .expect("new test db schema to be created");
                        Ok(())
                    })
                })
                .connect(&db_connection_url)
                .await
                .expect("db connection to succeed")
        };

        // Run all the migrations
        sqlx::migrate!()
            .run(&pool)
            .await
            .expect("migrations should run correctly");

        DbTestEnv { pool, schema }
    }

    pub async fn execute(&mut self, sql: &str) {
        sqlx::query(sql)
            .execute(&self.pool)
            .await
            .expect("execute sql to succeed");
    }

    pub async fn cleanup(&mut self) -> () {
        sqlx::query(&format!("DROP SCHEMA {} CASCADE", self.schema))
            .execute(&self.pool)
            .await
            .expect("test db schema to be dropped");
    }
}

pub async fn server_public_request<I: Serialize, O: DeserializeOwned>(
    endpoint: HttpPost<I, O>,
    req: &I,
) -> O {
    let client = reqwest::Client::new();
    let resp = client
        .post(format!("http://localhost:8181{}", endpoint.path))
        .json(req)
        .send()
        .await
        .unwrap();
    assert_eq!(resp.status(), 200);
    resp.json().await.unwrap()
}

pub fn test_server_config() -> ServerConfig {
    ServerConfig {
        db: DbConnectionConfig {
            host: "localhost".to_owned(),
            dbname: "postgres".to_owned(),
            port: 5432,
            user: "postgres".to_owned(),
            password: "xyzzy".to_owned(),
        },
        jwt_secret: "treyweyetry".to_owned(),
        jwt_issuer: "adl-protoapp.link".to_owned(),
        jwt_expiry_secs: 300,
        http_bind_addr: "0.0.0.0:8181".to_owned(),
    }
}
