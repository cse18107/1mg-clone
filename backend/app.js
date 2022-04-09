const express = require('express');
const connect = require('./connection');
const cors = require('cors');
const salesExeRoutes = require('./routes/salesExeRoutes');

const app = express();
app.use(cors());
app.use(express.json());

connect();

app.use('/api',salesExeRoutes);

module.exports = app;