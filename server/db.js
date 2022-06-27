const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "kimhg",
  password: "namu0905",
  port: 5432,
  database: "authtodo",
});

module.exports = pool;
