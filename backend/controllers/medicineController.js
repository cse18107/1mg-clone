const MedicineModel = require('../modules/medicineModule');


module.exports.addNewMedicine = async (req, res) => {
    try {
        const newMedicineData = req.body;
        const createNewData = await MedicineModel.create(newMedicineData);

        res.status(400).json({
            success: true,
            message: 'New Medicine added successfully',
            data: createNewData
        });
    } catch (err) {
        res.json({
            message: err.message
        });
    }
};


module.exports.getSingleMedicine = async (req, res) => {
    try {
        const getData = req.params.id;
        const data = await MedicineModel.findById(getData);

        res.status(400).json({
            success: true,
            data: data
        });
    } catch (err) {
        res.json({
            message: err.message
        });
    }
};


module.exports.getAllMedicine = async (req, res) => {
    try {
        const getAllData = await MedicineModel.find();
        res.status(201).json({
            success: true,
            message: 'Get all medicine Details',
            data: getAllData
        });
    }
    catch (err) {
        res.json({
            message: err.message
        });
    }
};


module.exports.updateMedicineDetails = async (req, res) => {
    try {
        const medicineData = await MedicineModel.findById(req.params.id);

        if (!medicineData) {
            res.status(404).json({
                message: 'Medicine not found in db'
            });
        };

        const newMedicineData = await MedicineModel.findByIdAndUpdate(req.params.id, req.body);

        res.status(400).json({
            success: 'true',
            message: 'Data updated successfully',
            data: newMedicineData
        });
    } catch (err) {
        res.json({
            message: err.message
        });
    }
};


module.exports.deleteMedicine = async (req, res) => {
    try {
        const medicineId = req.params.id;
        const medicineData = await MedicineModel.findById(medicineId);

        if (!medicineData) {
            res.status(404).json({
                message: 'Medicine not found in database'
            });
        };

        await MedicineModel.findByIdAndDelete(medicineId);

        res.status(400).json({
            success: true,
            message: 'Deletion successful'
        });
    } catch (err) {
        res.json({
            message: err.message
        });
    }
};