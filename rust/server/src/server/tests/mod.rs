use adl::gen::common::db_api::PageReq;
use adl::gen::common::http::Unit;
use adl::gen::mycscores::apis;
use adl::gen::mycscores::apis::ui::{LoginReq, LoginTokens, RefreshReq, UserQueryReq};

use crate::server::tests::helpers::{
    create_test_user, login_user, server_auth_req, server_public_req, server_req,
    test_server_config, DbTestEnv,
};
use crate::server::{AppState, OServer};

mod helpers;

#[tokio::test]
async fn schema_setup() {
    let mut db = DbTestEnv::new().await;
    db.cleanup().await;
}

#[tokio::test]
async fn server_login() {
    let mut db = DbTestEnv::new().await;
    let oserver = OServer::spawn(AppState::new(test_server_config(), db.pool.clone()));

    let u1 = create_test_user_joe(&mut db).await;

    let tokens = {
        // Check that we can login as joe
        let resp = server_public_req(apis::ui::ApiRequests::def_login(), &u1).await;
        assert!(is_valid_login(&resp));
        get_login_tokens(resp).unwrap()
    };

    {
        // Check that we can refresh using the refresh token
        let resp = server_public_req(
            apis::ui::ApiRequests::def_refresh(),
            &RefreshReq {
                refresh_token: Some(tokens.refresh_jwt),
            },
        )
        .await;
        assert!(is_valid_refresh(&resp));
    }

    {
        // Check that we can't refresh using the access token
        let resp = server_public_req(
            apis::ui::ApiRequests::def_refresh(),
            &RefreshReq {
                refresh_token: Some(tokens.access_jwt),
            },
        )
        .await;
        assert!(!is_valid_refresh(&resp));
    }

    {
        // Check that we can logout
        server_public_req(apis::ui::ApiRequests::def_logout(), &Unit {}).await;
    }

    {
        // Check that we can't login with the wrong password
        let resp = server_public_req(
            apis::ui::ApiRequests::def_login(),
            &apis::ui::LoginReq {
                email: "joe@test.com".to_owned(),
                password: "xxxxxx".to_owned(),
            },
        )
        .await;
        assert!(!is_valid_login(&resp));
    }

    {
        // Check that we can't login with an invalid email
        let resp = server_public_req(
            apis::ui::ApiRequests::def_login(),
            &apis::ui::LoginReq {
                email: "mike@test.com".to_owned(),
                password: "abcde".to_owned(),
            },
        )
        .await;
        assert!(!is_valid_login(&resp));
    }

    oserver.shutdown().await.unwrap();
    db.cleanup().await;
}

#[tokio::test]
async fn server_user_profile() {
    let mut db = DbTestEnv::new().await;
    let oserver = OServer::spawn(AppState::new(test_server_config(), db.pool.clone()));

    let u1 = create_test_user_joe(&mut db).await;
    let u1_jwt = login_user(&u1).await;

    let resp = server_auth_req(apis::ui::ApiRequests::def_who_am_i(), &u1_jwt, &()).await;
    assert_eq!(resp.value.fullname, "Joe");
    assert_eq!(resp.value.email, "joe@test.com");
    assert!(!resp.value.is_admin);

    oserver.shutdown().await.unwrap();
    db.cleanup().await;
}

#[tokio::test]
async fn server_user_crud() {
    let mut db = DbTestEnv::new().await;
    let oserver = OServer::spawn(AppState::new(test_server_config(), db.pool.clone()));

    let u1 = create_test_user_joe(&mut db).await;
    let u2 = create_test_user_sarah(&mut db).await;

    let u1_jwt = get_login_tokens(server_public_req(apis::ui::ApiRequests::def_login(), &u1).await)
        .unwrap()
        .access_jwt;
    let u2_jwt = get_login_tokens(server_public_req(apis::ui::ApiRequests::def_login(), &u2).await)
        .unwrap()
        .access_jwt;

    // u1 is not an admin, so shouldn't be allowed to create new users
    {
        let http_resp = server_req(
            apis::ui::ApiRequests::def_create_user(),
            Some(&u1_jwt),
            &apis::ui::UserDetails {
                fullname: "Austin".to_owned(),
                email: "austin@mycompany.org".to_owned(),
                is_admin: false,
                password: "sukpepolup".to_owned(),
            },
        )
        .await;
        assert_eq!(http_resp.status(), 403);
    }

    // u2 is an admin, so can create new users
    {
        let http_resp = server_req(
            apis::ui::ApiRequests::def_create_user(),
            Some(&u2_jwt),
            &apis::ui::UserDetails {
                fullname: "Austin".to_owned(),
                email: "austin@mycompany.org".to_owned(),
                is_admin: false,
                password: "sukpepolup".to_owned(),
            },
        )
        .await;
        assert_eq!(http_resp.status(), 200);
    }

    // and can query existing users
    {
        let mut req = UserQueryReq::new();
        req.page = PageReq {
            offset: 0,
            limit: 100,
        };
        let resp = server_auth_req(apis::ui::ApiRequests::def_query_users(), &u2_jwt, &req).await;
        assert_eq!(resp.items.len(), 3);
    }

    oserver.shutdown().await.unwrap();
    db.cleanup().await;
}

fn is_valid_login(resp: &apis::ui::LoginResp) -> bool {
    match resp {
        apis::ui::LoginResp::Tokens(_) => true,
        apis::ui::LoginResp::InvalidCredentials => false,
    }
}

fn is_valid_refresh(resp: &apis::ui::RefreshResp) -> bool {
    matches!(resp, apis::ui::RefreshResp::AccessToken(_))
}

fn get_login_tokens(resp: apis::ui::LoginResp) -> Option<LoginTokens> {
    match resp {
        apis::ui::LoginResp::Tokens(tokens) => Some(tokens),
        apis::ui::LoginResp::InvalidCredentials => None,
    }
}

async fn create_test_user_joe(db: &mut DbTestEnv) -> LoginReq {
    create_test_user(db, "U-1", "Joe", "joe@test.com", "abcde", false).await
}

async fn create_test_user_sarah(db: &mut DbTestEnv) -> LoginReq {
    create_test_user(db, "U-2", "Sarah", "sarah@test.com", "uvwxyz", true).await
}
