use crate::adl::gen::common::http::Unit;
use crate::adl::gen::protoapp::apis;
use crate::adl::gen::protoapp::apis::ui::LoginReq;
use crate::server::tests::helpers::{
    create_test_user, login_user, server_auth_request, server_public_request, test_server_config,
    DbTestEnv,
};
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

#[tokio::test]
async fn server_login() {
    let mut db = DbTestEnv::new().await;
    let oserver = OServer::spawn(test_server_config(), db.pool.clone());

    let u1 = create_test_user_1(&mut db).await;

    let resp = server_public_request(apis::ui::ApiRequests::def_login(), &u1).await;
    assert!(is_valid_login(resp));

    let resp = server_public_request(
        apis::ui::ApiRequests::def_login(),
        &apis::ui::LoginReq {
            email: "joe@test.com".to_owned(),
            password: "xxxxxx".to_owned(),
        },
    )
    .await;
    assert!(!is_valid_login(resp));

    let resp = server_public_request(
        apis::ui::ApiRequests::def_login(),
        &apis::ui::LoginReq {
            email: "mike@test.com".to_owned(),
            password: "abcde".to_owned(),
        },
    )
    .await;
    assert!(!is_valid_login(resp));

    oserver.shutdown().await.unwrap();
    db.cleanup().await;
}

#[tokio::test]
async fn server_new_message() {
    let mut db = DbTestEnv::new().await;
    let oserver = OServer::spawn(test_server_config(), db.pool.clone());

    let u1 = create_test_user_1(&mut db).await;

    let jwt = login_user(&u1).await;

    let _ = server_auth_request(
        apis::ui::ApiRequests::def_new_message(),
        &jwt,
        &apis::ui::NewMessageReq {
            message: "I sent something".to_owned(),
        },
    )
    .await;

    oserver.shutdown().await.unwrap();
    db.cleanup().await;
}

fn is_valid_login(resp: apis::ui::LoginResp) -> bool {
    match resp {
        apis::ui::LoginResp::AccessToken(_) => true,
        apis::ui::LoginResp::InvalidCredentials => false,
    }
}

async fn create_test_user_1(db: &mut DbTestEnv) -> LoginReq {
    create_test_user(db, "U-1", "Joe", "joe@test.com", "abcde").await
}
