db.createUser(
    {
      user: "root",
      pwd: "password",
      roles: [
        { role: "readWrite", db: "product_catalog" }
      ]
    }
  )