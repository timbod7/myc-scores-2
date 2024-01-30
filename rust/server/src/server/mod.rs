use hyper::{
    service::{make_service_fn, service_fn},
    Server,
};
use sqlx::{postgres::PgPoolOptions, PgPool};
use std::sync::Arc;
use tokio::{sync::oneshot, task::JoinHandle};

use crate::adl::gen::protoapp::config::server::ServerConfig;

type Response = hyper::Response<hyper::Body>;
type Error = Box<dyn std::error::Error + Send + Sync + 'static>;

pub mod db;
mod handler;
mod jwt;
pub mod passwords;

#[cfg(test)]
pub mod tests;

#[derive(Clone)]
pub struct AppState {
    pub config: Arc<ServerConfig>,
    pub db_pool: Arc<PgPool>,
}

pub async fn run(config: ServerConfig) {
    let db = &config.db;

    let db_connection_url = format!(
        "postgres://{}:{}@{}:{}/{}",
        db.user, db.password, db.host, db.port, db.dbname
    );
    let db_pool: PgPool = PgPoolOptions::new()
        .max_connections(5)
        .connect(&db_connection_url)
        .await
        .expect("db connection should work");

    // Run any migrations
    log::info!("Running sqlx migrations...");
    sqlx::migrate!()
        .run(&db_pool)
        .await
        .expect("migrations should run correctly");
    log::info!("sqlx migrations completed");

    let (_never, shutdown) = tokio::sync::oneshot::channel::<()>();
    OServer::run(config, db_pool, shutdown).await;
}

pub struct OServer {
    shutdown: oneshot::Sender<()>,
    joinhandle: JoinHandle<()>,
}

impl OServer {
    pub fn spawn(config: ServerConfig, db_pool: PgPool) -> Self {
        let (shutdown, shutdown_notify) = oneshot::channel::<()>();
        let joinhandle = tokio::spawn(Self::run(config, db_pool, shutdown_notify));
        OServer {
            shutdown,
            joinhandle,
        }
    }

    pub async fn shutdown(self) -> Result<(), ()> {
        self.shutdown.send(())?;
        self.joinhandle.await.map_err(|_| ())?;
        Ok(())
    }

    pub async fn run(config: ServerConfig, db_pool: PgPool, shutdown: oneshot::Receiver<()>) {
        let config = Arc::new(config);
        let db_pool = Arc::new(db_pool);
        let new_service = make_service_fn(|_| {
            let app_state = AppState {
                config: config.clone(),
                db_pool: db_pool.clone(),
            };
            async {
                Ok::<_, Error>(service_fn(move |req| {
                    handler::handler(app_state.clone(), req)
                }))
            }
        });

        let addr = config
            .http_bind_addr
            .parse()
            .expect("address creation works");
        let server = Server::bind(&addr).serve(new_service);
        let graceful = server.with_graceful_shutdown(async {
            shutdown.await.ok();
        });
        log::info!("Listening on http://{}", addr);
        let _ = graceful.await;
    }
}
