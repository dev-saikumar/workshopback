const express = require("express");
const M = require("../models/registermodel");


const route = express.Router();
route.post("/", async (req, res) => {
  const hello = M.exp(req.body.evename);
  try {
    await hello.updateOne({
      rollno: req.body.rollno
    }, {
      $set: {
        attended: 1
      }
    });
    res.status(200).send("ok");
  } catch (error) {
    res.status(400);
  }
});

module.exports = route;