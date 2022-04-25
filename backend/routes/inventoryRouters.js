const express = require('express');
const {authorizeRoles} = require('../middleware/auth');
const { getSingleInventory, createInventory, getAllInventoryDetails, cancelInventory, updateInventory } = require('../controllers/oderController');
const inventoryRouter = express.Router();

inventoryRouter
    .route('salesExecutive/inventoryes')
    .post(authorizeRoles("SALES_EXECUTIVE"), createInventory)
    .get(getAllInventoryDetails)

inventoryRouter
    .route('salesExecutive/inventory/:id')
    .get(getSingleInventory)
    .delete(authorizeRoles("SALES_EXECUTIVE"),cancelInventory)
    .post(authorizeRoles("SALES_EXECUTIVE"), updateInventory)


module.exports = inventoryRouter;