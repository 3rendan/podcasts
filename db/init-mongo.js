db.createUser(
  {
    user: "anyone",
    pwd: "doesnotmatterwhatthisis"
    roles: [
      {
        role: "readWrite",
        db: "multicontainer-database"
      }
    ]
  }
)