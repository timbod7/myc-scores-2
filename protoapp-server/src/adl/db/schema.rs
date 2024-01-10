// This file is generated from the schema definition

use sea_query::Iden;

#[derive(Iden, Clone, Copy)]
pub enum AppUser {
    #[iden = "app_user"]
    Table,
    Id,
    Fullname,
    Email,
    IsAdmin,
    HashedPassword,
}

#[derive(Iden, Clone, Copy)]
pub enum Message {
    #[iden = "message"]
    Table,
    Id,
    PostedAt,
    PostedBy,
    Message,
}

