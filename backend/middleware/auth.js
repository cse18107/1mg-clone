const Inventory = require('../models/inventoryModel');


module.exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.Inventory.role)) {
         res.status(500).json({
             message: 'Unauthorized server error'
         });
      }

      next();
    };
  };

