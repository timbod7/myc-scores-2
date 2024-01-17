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

#[tokio::test]
async fn server_login() {
    let mut db = DbTestEnv::new().await;
    db.execute(
        "INSERT INTO app_user(id,fullname,email,is_admin,hashed_password) VALUES ('U-1', 'Joe', 'joe@test.com', true, '$argon2id$v=19$m=16,t=2,p=1$eHl6enlhYmNk$U2wsPnhN3bS1jwtm+fIr2g');"
    ).await;

    let oserver = OServer::spawn(test_server_config(), db.pool.clone());

    let resp = server_public_request(
        apis::ui::ApiRequests::def_login(),
        &apis::ui::LoginReq {
            email: "joe@test.com".to_owned(),
            password: "abcde".to_owned(),
        },
    )
    .await;
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

fn is_valid_login(resp: apis::ui::LoginResp) -> bool {
    match resp {
        apis::ui::LoginResp::AccessToken(_) => true,
        apis::ui::LoginResp::InvalidCredentials => false,
    }
}
