const mysql = require('mysql2');
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "3gFh#$ta44JMgR9h",
});

module.exports = pool.promise();