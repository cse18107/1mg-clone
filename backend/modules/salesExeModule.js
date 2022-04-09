const mongoose = require('mongoose');

const saleExeSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    experienceYear:{
        type:String,
        required:true
    }
});

const SalesExecutive = mongoose.model('SalesExecutive',saleExeSchema);

module.exports = SalesExecutive;