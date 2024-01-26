use crate::adl::gen::common::http::Unit;
use crate::adl::gen::protoapp::apis;
use crate::adl::gen::protoapp::apis::ui::{LoginReq, Message, Paginated};
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

    let u1 = create_test_user_joe(&mut db).await;

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
async fn server_messages() {
    let mut db = DbTestEnv::new().await;
    let oserver = OServer::spawn(test_server_config(), db.pool.clone());

    let u1 = create_test_user_joe(&mut db).await;
    let u2 = create_test_user_sarah(&mut db).await;

    let u1_jwt = login_user(&u1).await;
    let u2_jwt = login_user(&u2).await;

    send_message(&u1_jwt, "A first message").await;
    send_message(&u1_jwt, "Another message").await;
    send_message(&u1_jwt, "Still going").await;

    // Check page 1
    let m = recent_messages(&u2_jwt, 0, 2).await;
    assert_eq!(m.current_offset, 0);
    assert_eq!(m.total_count, 3);
    assert_eq!(m.items.len(), 2);
    assert_eq!(m.items.get(0).unwrap().message, "Still going");
    assert_eq!(m.items.get(0).unwrap().user_fullname, "Joe");
    assert_eq!(m.items.get(1).unwrap().message, "Another message");

    // Check page 2
    let m = recent_messages(&u2_jwt, 2, 2).await;
    assert_eq!(m.current_offset, 2);
    assert_eq!(m.total_count, 3);
    assert_eq!(m.items.len(), 1);
    assert_eq!(m.items.get(0).unwrap().message, "A first message");

    oserver.shutdown().await.unwrap();
    db.cleanup().await;
}

async fn send_message(jwt: &str, message: &str) {
    let _ = server_auth_request(
        apis::ui::ApiRequests::def_new_message(),
        jwt,
        &apis::ui::NewMessageReq {
            message: message.to_owned(),
        },
    )
    .await;
}

async fn recent_messages(jwt: &str, offset: u32, limit: u32) -> Paginated<Message> {
    server_auth_request(
        apis::ui::ApiRequests::def_recent_messages(),
        jwt,
        &apis::ui::RecentMessagesReq { offset, limit },
    )
    .await
}

fn is_valid_login(resp: apis::ui::LoginResp) -> bool {
    match resp {
        apis::ui::LoginResp::AccessToken(_) => true,
        apis::ui::LoginResp::InvalidCredentials => false,
    }
}

async fn create_test_user_joe(db: &mut DbTestEnv) -> LoginReq {
    create_test_user(db, "U-1", "Joe", "joe@test.com", "abcde").await
}

async fn create_test_user_sarah(db: &mut DbTestEnv) -> LoginReq {
    create_test_user(db, "U-2", "Sarah", "sarah@test.com", "uvwxyz").await
}
