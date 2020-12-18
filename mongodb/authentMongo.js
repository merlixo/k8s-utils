
// create admin user
db = db.getSiblingDB("admin")
db.createUser(
  {
    user: "<ADMIN_USR>",
    pwd: "<ADMIN_PSW>",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)

// authenticate as admin user
db.auth("<ADMIN_USR>", "<ADMIN_PSW>")

// create read-only user
db.createUser(
  {
    user: "<READ_USR>",
    pwd: "<READ_PSW>",
    roles: [{ "role" : "read", "db" : "<MY_DB>" }]
  }
)

// create write user
db.createUser(
  {
    user: "<WRITE_USR>",
    pwd: "<WRITE_PSW>",
    roles: [{ "role" : "readWrite", "db" : "<MY_DB>" }]
  }
)