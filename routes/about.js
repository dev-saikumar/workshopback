const express = require("express");
const M= require("../models/aboutwork");
const route= express.Router();

route.get("/",async (req,res)=>{
    const Model=M.exp(req.body.evename);
    try {
        const tot= await Model.estimatedDocumentCount();
        const atten= await Model.countDocuments({attended:1});
        const confirm= await Model.countDocuments({confirmed:1});
        res.status(200).json({"name":req.body.evename,"total":tot,"attented":atten,"confirmed":confirm});
    } catch (error) {
        res.status(200);
    }
});

module.exports =route;