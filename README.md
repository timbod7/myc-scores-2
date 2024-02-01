A demonstration 3 tier application using ADL as the "typing glue".

# Local setup

Install docker for your platform. Then install deno, node, and adl into a repo
local directory by running the local setup script:

```
. deno/local-setup.sh

deno --version
node --version
adlc show --version 
```


# Unit tests

Start postgres using docker:


```
docker run --name protoapp_db -e POSTGRES_PASSWORD=xyzzy --publish 5432:5432 -d postgres:14
```

Run the unit tests via cargo:

```
cd rust/server
export DB_CONNECTION_URL=postgresql://postgres:xyzzy@localhost:5432/postgres
cargo test -- --test-threads=1
```

# Run locally

## Start a database

```
docker run --name protoapp_db -e POSTGRES_PASSWORD=xyzzy --publish 5432:5432 -d postgres:14
```

## Start the server

```
(
cd rust/server
export PROTOAPP_SERVER_CONFIG='{
  "http_bind_addr": "0.0.0.0:8081",
  "db": {
    "host": "127.0.0.1",
    "port": 5432,
    "dbname": "postgres",
    "user": "postgres",
    "password": "xyzzy"
  },
  "jwt_secret": "shouldbeasecret",
  "jwt_expiry_secs": 3600
 }'
export RUST_LOG=info
cargo run --bin protoapp-server
)
```

This will create the db schema and/or apply any necessary migrations

# Create some test users

```
(
export DB_CONNECTION_URL=postgresql://postgres:xyzzy@localhost:5432/postgres
cargo run --bin protoapp-tools -- create-user joe@test.com Joe xyzzy
cargo run --bin protoapp-tools -- create-user sarah@test.com Sarah abcde
)
```

## Start the ui in dev mode

```
(
cd ts/ui
yarn
yarn dev
)
```
