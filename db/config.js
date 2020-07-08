require("dotenv").config()

module.exports = {
  development: {
    // url: process.env.DATABASE_URL,
    // dialect: "postgres",
    dialect: "sqlite",
    storage: "data/dev.sqlite3",
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:",
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
  },
}
