const express = require('express');
const { getSingleInventory, createInventory, getAllInventoryDetails, cancelInventory, updateInventory } = require('../controllers/oderController');
const inventoryRouter = express.Router();

inventoryRouter
    .route('/inventoryes')
    .post(createInventory)
    .get(getAllInventoryDetails)

inventoryRouter
    .route('/inventory/:id')
    .get(getSingleInventory)
    .delete(cancelInventory)
    .post(updateInventory)


module.exports = inventoryRouter;