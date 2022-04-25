const express = require('express');
const { getSingleOrder, createOrder, getAllOrderDetails, cancelOrder, updateOrder } = require('../controllers/oderController');
const orderRouter = express.Router();


orderRouter
    .route('/orders')
    .post(createOrder)
    .get(getAllOrderDetails)

orderRouter
    .route('/order/:id')
    .get(getSingleOrder)
    .delete(cancelOrder)
    .post(updateOrder)


module.exports = orderRouter;