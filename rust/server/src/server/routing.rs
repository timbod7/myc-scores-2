use poem::endpoint::{DynEndpoint, ToDynEndpoint};
use poem::middleware::Tracing;
use poem::session::{CookieConfig, CookieSession};
use poem::{post, EndpointExt, Route};

use adl::gen::mycscores::apis::ui::ApiRequests;

use crate::server::handlers;
use crate::server::middleware::adl_interop::{new_access_token_checker, RouteExt};
use crate::server::AppState;

use super::middleware::error_handling::ErrorLogging;

pub fn build_routes(state: AppState) -> Box<dyn DynEndpoint<Output = poem::Response>> {
    let access_token_checker = new_access_token_checker(state.config.jwt_access_secret.clone());

    let routes = Route::new();

    // Add standard ADL implemented handlers
    let routes = routes
        .adl_req(ApiRequests::def_healthy(), handlers::healthy)
        .adl_req(ApiRequests::def_who_am_i(), handlers::who_am_i)
        .adl_req(ApiRequests::def_create_user(), handlers::users::create_user)
        .adl_req(ApiRequests::def_update_user(), handlers::users::update_user)
        .adl_req(ApiRequests::def_delete_user(), handlers::users::delete_user)
        .adl_req(ApiRequests::def_query_users(), handlers::users::query_users)
        .adl_req(
            ApiRequests::def_create_season(),
            handlers::seasons::create_season,
        )
        .adl_req(
            ApiRequests::def_update_season(),
            handlers::seasons::update_season,
        )
        .adl_req(
            ApiRequests::def_delete_season(),
            handlers::seasons::delete_season,
        )
        .adl_req(
            ApiRequests::def_query_seasons(),
            handlers::seasons::query_seasons,
        );

    // Add handlers that need custom cookie handling
    let routes = routes
        .at(
            ApiRequests::def_login().path,
            post(handlers::login_with_cookies),
        )
        .at(
            ApiRequests::def_refresh().path,
            post(handlers::refresh_with_cookies),
        )
        .at(
            ApiRequests::def_logout().path,
            post(handlers::logout_with_cookies),
        );

    // Add system state and required middleware
    let routes = routes
        .data(state)
        .data(access_token_checker)
        .with(CookieSession::new(CookieConfig::default().secure(false)))
        .with(Tracing)
        .with(ErrorLogging);

    Box::new(ToDynEndpoint(routes))
}
