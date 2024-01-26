use argon2::{
    password_hash::{
        rand_core::OsRng, Error, PasswordHash, PasswordHasher, PasswordVerifier, SaltString,
    },
    Argon2,
};

pub fn hash_password(password_cleartext: &str) -> Result<String, Error> {
    let argon2 = Argon2::default();
    let salt = SaltString::generate(&mut OsRng);
    let password_hashed = argon2
        .hash_password(password_cleartext.as_bytes(), &salt)?
        .to_string();
    Ok(password_hashed)
}

pub fn verify_password(password_cleartext: &str, password_hashed: &str) -> bool {
    let parsed_hash = PasswordHash::new(password_hashed).expect("valid hashed password");
    Argon2::default()
        .verify_password(password_cleartext.as_bytes(), &parsed_hash)
        .is_ok()
}
