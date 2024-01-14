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
docker run --name testpostgres -e POSTGRES_PASSWORD=xyzzy --publish 5432:5432 -d postgres:14
```

Run the unit tests via cargo:

```
cd rust/server
export DB_CONNECTION_URL=postgresql://postgres:xyzzy@localhost:5432/postgres
cargo test -- --test-threads=1
```
