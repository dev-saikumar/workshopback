const express = require("express");
const M= require("../models/registermodel");
const M1= require("../models/aboutwork");

const route= express.Router();

route.post("/",async (req,res)=>{
    const Model2=M.exp(req.body.evename);
    const model2= new Model2({
        name: req.body.name,
        email: req.body.email,
        rollno: req.body.rollno,
        phn: req.body.phn,
        branch: req.body.branch,
        sec: req.body.sec,
        year: req.body.year
    });
    try {

        const val = await Model2.countDocuments({email:req.body.email});
        const val2 = await Model2.countDocuments({rollno:req.body.rollno});
        if (val>0||val2>0) {
            res.status(404).send("already exists");
        }else{
            await model2.save();
        res.status(200).send("ok");
        }
    } catch (error) {
        res.status(400);
    }
});

route.post("/spotreg", async (req,res)=>{
    const Model1 =M1.exp(req.body.evename);
    const model1= new Model1({
        name: req.body.name,
        email: req.body.email,
        rollno: req.body.rollno,
        phn: req.body.phn,
        branch: req.body.branch,
        sec: req.body.sec,
        year: req.body.year,
        attended: "1",
    });
    try {
        const val= await Model1.countDocuments({rollno: req.body.rollno});
        if (val==0) {
            await model1.save();
            res.status(200).send("ok");
        } else {
            await Model1.updateOne({rollno: req.body.rollno},{$set:{attended: 1}});
            res.status(200).send("ok");
        }
    } catch (error) {
        res.status(400);
    }
});

module.exports =route;