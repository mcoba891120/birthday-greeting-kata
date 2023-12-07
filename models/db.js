require("dotenv").config();
const mysql = require("mysql12/promise");
const env = process.env.NODE_ENV || "development";
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
const dbConfig = {
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
};

let dbEnv = dbConfig[env];
dbEnv.waitForConnections = true;
dbEnv.connectionLimit = 10;

const pool = mysql.createPool(dbEnv);

module.exports = pool;
