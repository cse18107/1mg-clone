const express = require('express');
const connect = require('./connection');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

connect();


app.get('/',(req,res)=>{
    res.status(201).json({
        message:'Its working'
    });
});

module.exports = app;