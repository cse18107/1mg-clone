const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const InventorSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        maxlength: 15
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        maxlength: 10,
        select: false
    },
    confirmPassword: {
        type: String,
        required: true,
        select: false
    },
    role: {
        type: String,
        default: "SALES_EXECUTIVE"
    }
});

InventorSchema.pre('save', async function(){
    bcrypt.hash(this.password, 10);
});

const inventorModels = mongoose.model('inventorModels',userSchema);

module.exports = inventorModels;