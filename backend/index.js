import express from 'express';
import mysql from 'mysql';

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test',

})

app.get("/", (req, res) => {
    res.json("Hello this is the backend!");
})

app.listen(8080,()=>{
    console.log('Server running on port 8080');
});