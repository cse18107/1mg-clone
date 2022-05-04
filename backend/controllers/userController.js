const inventorModels = require('../models/inventoryModel');
const Inventory = require('../models/inventoryModel');


module.exports.userSignup = (req,res) => {
    Inventory.findOne({email: req.body.email})
    .exec((user,error) => {
        if(user){
            res.status(201).json({
                message: 'user already registered'
            });
        } else{
            res.status(500).json({
                message: 'Unauthorised server error'
            });
        }
    });

    const _user = new inventorModels.create({
        Name: req.body.Name,
        Mobile: req.body.Mobile,
        email: req.body.email,
        password: req.body.password
    });

    _user.save((error, data) => {
        if(error){
            res.status(404).json({
                message: 'Something Wrong'
            });
        }
        if(data){
            res.status(201).json({
                message: 'User successlly created',
                data: _user
            })
        }
    });
};

