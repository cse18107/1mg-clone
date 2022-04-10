const express = require('express');
const connect = require('./connection');
const cors = require('cors');
const medicineRoutes = require('../backend/routes/medicineRoute');
const app = express();


app.use(cors());
app.use(express.json());

connect();

app.use('/api', medicineRoutes);

module.exports = app;