const mongoose= require("mongoose");

let myFunction=function dynamic_coll(coll_name){
const aboutModel= mongoose.Schema({
evename:{
    type: String,
    required: true
},
description:{
    type: String,
    required: true,
},
registered:{
    type: Number,
    default: 0
},
confirmed:{
    type: Number,
    default:0
},
selected:{
    type: Number,
    default: 0
},
attended:{
    type: Number,
    default: 0
}
});
return mongoose.model(coll_name,aboutModel);
}
exports.exp=myFunction;