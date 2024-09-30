import { createPool } from "mysql2";
import * as dotenv from "dotenv";
dotenv.config();
// Create a pool of connections
export const connection = createPool({
  host: "127.0.0.1",
  port: 3300,
  user: "root",
  password: "admin",
  database: "product_db",
  connectionLimit: 10,
});

// Wrap the pool in a promise-based API if needed
export const promisePool = connection.promise();
