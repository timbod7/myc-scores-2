use adl::gen::common::db_api::Paginated;
use adl::gen::common::http::Unit;
use adl::gen::mycscores::apis::ui::{UserDetails, UserQueryReq, UserWithId, WithId};
use adl::gen::mycscores::db::{AppUser, AppUserId};

use crate::server::db;
use crate::server::middleware::adl_interop::HandlerResult;
use crate::server::passwords::hash_password;

use super::ReqContext;

pub async fn create_user(ctx: ReqContext, i: UserDetails) -> HandlerResult<AppUserId> {
    let hashed_password = hash_password(&i.password).expect("password can be hashed");
    let user = AppUser {
        fullname: i.fullname.clone(),
        email: i.email.clone(),
        is_admin: i.is_admin,
        hashed_password,
    };
    let id = db::users::create_user(&ctx.state.db_pool, &user).await?;
    Ok(id)
}

pub async fn update_user(
    ctx: ReqContext,
    i: WithId<AppUserId, UserDetails>,
) -> HandlerResult<Unit> {
    let hashed_password = hash_password(&i.value.password).expect("password can be hashed");
    let user = AppUser {
        fullname: i.value.fullname.clone(),
        email: i.value.email.clone(),
        is_admin: i.value.is_admin,
        hashed_password,
    };
    db::users::update_user(&ctx.state.db_pool, &i.id, &user).await?;
    Ok(Unit {})
}

pub async fn delete_user(ctx: ReqContext, i: AppUserId) -> HandlerResult<Unit> {
    db::users::delete_user(&ctx.state.db_pool, &i).await?;
    Ok(Unit {})
}

pub async fn query_users(ctx: ReqContext, i: UserQueryReq) -> HandlerResult<Paginated<UserWithId>> {
    let users = db::users::query_users(&ctx.state.db_pool, &i).await?;
    let total_count = db::users::user_count(&ctx.state.db_pool).await?;
    let page = Paginated {
        items: users,
        current_offset: i.page.offset,
        total_count,
    };
    Ok(page)
}
