const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('')


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
    }
});

module.exports = InventorSchema;