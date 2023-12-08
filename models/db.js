require("dotenv").config();
const mysql = require("mysql2/promise");
const env = process.env.NODE_ENV || "development";
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;
const dbConfig = {
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT,
};

let dbEnv = dbConfig;
dbEnv.waitForConnections = true;
dbEnv.connectionLimit = 10;

const pool = mysql.createPool(dbEnv);

const create_connection = async () => {
  try {
    const conn = await pool.getConnection();
    console.log("Database connection successful!");
    return conn;
  } catch (err) {
    console.error("Database connection error:", err);
  }
};

module.exports = { pool, create_connection };
