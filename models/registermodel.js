const mongoose= require("mongoose");

let myfunction= function(prefix){
var detailschema= mongoose.Schema({
name:{
    type: String,
    required: true
},
email:{
    type: String,
    required: true
},
phn:{
    type: Number,
    required: true
},
registeredon:{
    type: Date,
    default: Date.now
},
branch:{
    type: String,
    required: true
},
year:{
    type: Number,
    required:true
},
confirmed:{
    type: Number,
    default:0
},
selected:{
    type: Number,
    default:0
},
attended:{
    type: Number,
    default:0
},
rollno:{
    type: String,
    required: true
},
sec:{
    type: String,
    required: true
}
});
return mongoose.model(prefix,detailschema);
}

exports.exp=myfunction;