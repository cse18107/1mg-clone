const express = require('express');
const userRouter = express.Router();
const { getSingleMedicine, getAllMedicine, addNewMedicine } = require('../controllers/medicineController');
const { updateMedicineDetails, deleteMedicine} = require('../controllers/medicineController');


userRouter
    .route('/medicines')
    .get(getAllMedicine)
    .post(addNewMedicine)

userRouter
    .route('/medicine/:id')
    .get(getSingleMedicine)
    .delete(deleteMedicine)
    .post(updateMedicineDetails)



module.exports = userRouter;