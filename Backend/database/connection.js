const mysql = require("mysql");

const db = mysql.createPool({
  host: "172.17.0.2",
  user: "user",
  password: "user",
  database: "register",
});

module.exports = db;
