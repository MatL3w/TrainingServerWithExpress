// const mysql = require('mysql2');
// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "node-complete",
//   password: "3gFh#$ta44JMgR9h",
// });

// module.exports = pool.promise();
const Sequelize = require('sequelize');

const sequelize = new Sequelize("node-complete", "root", "3gFh#$ta44JMgR9h",{
    dialect: 'mysql',
    host: 'localhost'
});
module.exports = sequelize;