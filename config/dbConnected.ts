import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const DB_PORT = process.env.DB_PORT;

const db = new Pool({
    host: DB_HOST,
    port: DB_PORT ? parseInt(DB_PORT, 10) : undefined,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
});

db.connect((error) => {
    if(error) {
        console.log({
            message: `Database cannot connected!`,
            error: error,
        });
    } else {
        console.log({
            message: 'Database success connected!',
        });
    }
});

export default db;