const pgp = require("pg-promise")();

module.exports = pgp({
  user: "postgres",
  host: "backend-db",
  database: "getitdone",
  password: "postgres",
  port: 5432,
});
