const mongoose = require('mongoose');


const OrderSchema = new mongoose.Schema({
    Customer_Name: {
        type: String,
        required: true,
    },
    Contact_Number: {
        type: Number,
        required: true
    },
    Product_Name: {
        type: String,
        required: true
    },
    Purchase_Quantity: {
        type: Number,
        required: true
    },
    TotalAmount: {
        type: Number,
        required: true
    }
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
