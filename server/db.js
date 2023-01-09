const { Pool } = require("pg");
const pool = new Pool({
  user: "root",
  password: "root",
  host: "postgres", //host must match with postgres on composer
});

module.exports.db = pool
