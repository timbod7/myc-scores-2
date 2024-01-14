use crate::adl::gen::common::http::Unit;
use crate::adl::gen::protoapp::apis;
use crate::server::tests::helpers::{server_public_request, test_server_config, DbTestEnv};
use crate::server::OServer;

mod helpers;

#[tokio::test]
async fn schema_setup() {
    let mut db = DbTestEnv::new().await;
    db.cleanup().await;
}

#[tokio::test]
async fn server_ping() {
    let mut db = DbTestEnv::new().await;
    let oserver = OServer::spawn(test_server_config(), db.pool.clone());

    let ping = apis::ui::ApiRequests::def_ping();
    server_public_request(ping, &Unit {}).await;

    oserver.shutdown().await.unwrap();
    db.cleanup().await;
}
