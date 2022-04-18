const Inventory = require('../models/inventoryModel');



module.exports.createInventory = async (req, res) => {
    try {
        const inventoryData = await Inventory.create(req.body);

        res.status(400).json({
            success: true,
            message: 'Inventory created Successfully',
            data: inventoryData
        });

    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
};


module.exports.getAllInventoryDetails = async (req, res) => {
    try {
        const inventory = await Inventory.find();

        res.status(400).json({
            success: true,
            message: 'inventory Retrived',
            data: inventory
        });

    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

module.exports.getSingleInventory = async (req, res) => {
    try {
        const findInventory = await Inventory.findById(req.params.id);

        if (!findInventory) {
            res.status(404).json({
                message: 'order not found'
            });
        }

        res.status(400).json({
            success: true,
            data: findInventory
        });

    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

module.exports.updateInventory = async (req, res) => {
    try {
        const inventoryData = await Inventory.findById(req.params.id);

        if (!inventoryData) {
            res.status(404).json({
                message: 'Inventory not found in db'
            });
        };
        const newInventoryData = await Inventory.findByIdAndUpdate(req.params.id, req.body);

        res.status(400).json({
            success: 'true',
            message: 'Data updated successfully',
            data: newInventoryData
        });

    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

module.exports.cancelInventory = async (req, res) => {
    try {
        const inventoryId = req.params.id;
        const inventoryData = await Inventory.findById(inventoryId);

        if (!inventoryData) {
            res.status(404).json({
                message: 'Medicine not found in database'
            });
        };

        await Inventory.findByIdAndDelete(inventoryId);

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