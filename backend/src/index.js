import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import cors from 'cors';
import ip from 'ip';

dotenv.config();
// const PORT = process.env.PORT
const app = express();


app.use(cors({origin: '*'})); //TODO

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'edcVxswqaz132435',
    database: 'dzencodedb',
})



app.get('/', (req, res) => {
    res.send({massage: 'Hello World!'});
    console.log(process.env);
})

// app.listen(PORT, () => {
//     console.log(`Server started on port ${ip.address()}: ${PORT}`);
// })


db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database');
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

app.listen(8080, () => {
    console.log('Server running on port 8080');
});