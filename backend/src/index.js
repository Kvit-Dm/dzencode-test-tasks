import path from 'path';
import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import cors from 'cors';
import ip from 'ip';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });
const PORT = process.env.BACKEND_PORT || 5000;
const app = express();


app.use(cors({origin: '*'})); //TODO

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

app.get('/', (req, res) => {
    res.send({message: `Hello World!`});
        console.log(process.env.YOUR_VARIABLE_NAME);
})

// app.listen(PORT, () => {
//     console.log(`Server started on port ${ip.address()}: ${PORT}`);
// })

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
    } else {
        console.log('Connected to database');
    }
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
    res.json("Hello this is the backend!");
})

app.get("/products", (req, res) => {
    const q = "SELECT * FROM products";
    db.query(q, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    })
})
