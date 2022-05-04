const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        maxLength: 10,
        unique: true
    },
    Manufacturer_Name: {
        type: String,
        require: true,
        maxLength: 10
    },
    Price: {
        type: Number,
        required: true
    },
    Stock: {
        type: Number,
        required: true
    },
    Discount: {
        type: Number,
        // require: true
    }
});

const MedicineModel = mongoose.model('medicineModel', medicineSchema);

module.exports = MedicineModel;
