const Order = require('../models/orderModels');



module.exports.createOrder = async (req, res) => {
    try {
        const orderData = await Order.create(req.body);

        res.status(400).json({
            success: true,
            message: 'Order created Successfully',
            data: orderData
        });

    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
};


module.exports.getAllOrderDetails = async (req, res) => {
    try {
        const orders = await Order.find();

        res.status(400).json({
            success: true,
            message: 'Orders Retrived',
            data: orders
        });

    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

module.exports.getSingleOrder = async (req, res) => {
    try {
        const findOrder = await Order.findById(req.params.id);

        if (!findOrder) {
            res.status(404).json({
                message: 'order not found'
            });
        }

        res.status(400).json({
            success: true,
            data: findOrder
        });

    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

module.exports.updateOrder = async (req, res) => {
    try {
        const orderData = await Order.findById(req.params.id);

        if (!orderData) {
            res.status(404).json({
                message: 'Order not found in db'
            });
        };
        const newOrderData = await Order.findByIdAndUpdate(req.params.id, req.body);

        res.status(400).json({
            success: 'true',
            message: 'Data updated successfully',
            data: newOrderData
        });

    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

module.exports.cancelOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const orderData = await Order.findById(orderId);

        if (!orderData) {
            res.status(404).json({
                message: 'Medicine not found in database'
            });
        };

        await Order.findByIdAndDelete(orderId);

        res.status(400).json({
            success: true,
            message: 'Deletion successful'
        });

    } catch (error) {
        res.json({
            message: error.message
        });
    }
}