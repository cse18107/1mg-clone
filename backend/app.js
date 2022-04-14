const express = require('express');
const connect = require('./connection');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

connect();


module.exports = app;