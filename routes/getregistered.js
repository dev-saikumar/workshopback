const express = require("express");
const M= require("../models/registermodel");

const route= express.Router();
route.get("/",async (req,res)=>{
    const Model= M.exp(req.body.evename);
    try {
        const val=await Model.find();
        res.status(200).json(val);
    } catch (error) {
        res.status(400);
    }

});

module.exports =route;