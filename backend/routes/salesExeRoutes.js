const express = require('express');
const salesExeControllers = require('../controllers/salesExeControllers');

const routes = express.Router();

routes.route('/sales-executives').get(salesExeControllers.getAllSalesExecutives).post(salesExeControllers.createSalesExecutiveData);
routes.route('/sales-executive/:id').get(salesExeControllers.getASalesExecutives);
module.exports = routes;