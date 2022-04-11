const express = require('express');
const connect = require('./connection');
const cors = require('cors');
const orderRouter = require('../backend/routes/orderRouters');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', orderRouter);

connect();


module.exports = app;