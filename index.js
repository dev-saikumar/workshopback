require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const app= express();
const about=require("./routes/about");
const atended_worhshop=require("./routes/attended_workshop");
const getregisteredusers=require("./routes/getregistered");
const register=require("./routes/register");
const bodyparser= require("body-parser");
const confirm=require("./routes/confirmworkshop");
const labs=require('./routes/labs');

app.use(bodyparser.json());

app.use("/about",about);
app.use("/getregusers",getregisteredusers);
app.use("/attended-workshop",atended_worhshop);
app.use("/register",register);
app.use("/confirm",confirm);
app.use('/labs',labs);

mongoose.connect('mongodb+srv://couboidsclub:audibenz@cluster0-ax1bc.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true},(err,client)=>{
if(!err){
     app.listen("3000",()=>{
         app.locals.eve="flutter";
        console.log("server listening");
    });
}
});