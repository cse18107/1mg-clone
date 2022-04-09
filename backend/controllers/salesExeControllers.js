const SalesExecutive = require('../modules/salesExeModule');

const getAllSalesExecutives= async (req,res)=>{
    const getAllData = await SalesExecutive.find();
    res.status(201).json({
        message:"get all sales executives",
        data:getAllData
    })
};

const createSalesExecutiveData = async (req,res) => {
    const data = req.body;
    const created = await SalesExecutive.create(data);
    res.status(201).json({
        message:'data created successfully',
        data:created
    })
};

const getASalesExecutives = async(req,res)=> {
    const id = req.params.id;
    console.log(id);
    const data = await SalesExecutive.findById(id);
    res.status(201).json({
        message:'data found',
        data:data
    });
}

module.exports={getAllSalesExecutives,createSalesExecutiveData,getASalesExecutives}
