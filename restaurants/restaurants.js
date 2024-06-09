const express = require("express");
const { Client } = require('pg');
const app = express();
const database_postgres = new Client({user: 'user',password: 'mysecretpassword',host: '0.0.0.0',port: '8001',database: 'CESIEats',});

database_postgres.connect()
.then(() => {
    console.log('Connected to PostgreSQL database');
});

app.get("/", (req,res)=>{
    res.send("Restaurants default route")
})

app.listen(3001, ()=>{
    console.log("Up and running restaurants");
})

app.get("/restaurants", (req, res) => {
    database_postgres.query('SELECT * FROM restaurants', (err, result)=>{
        if (err) {
            console.error('Error executing query', err);
        }
        else {
            console.log('Query result :', result.rows);
        }
        res.send(result.rows);
    });
})
