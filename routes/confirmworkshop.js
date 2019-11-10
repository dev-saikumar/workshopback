const express = require("express");
const M=require("../models/registermodel");
const route=express.Router();

route.post("/",async(req,res)=>{
    const Model=M.exp(req.body.evename);
try {
    await Model.updateOne({email:req.body.email,rollno:req.body.rollno},{$set:{confirmed:1}});
    res.status(200).send("ok");
} catch (error) {
    res.status(400);
}
});

module.exports=route;