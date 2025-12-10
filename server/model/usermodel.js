const mongoose = require('mongoose');
const { Schema } = mongoose;

const userModel = new Schema({
  name: {type:String}, 
  email: {type:String,unique:true,require:true},
  password:{type:String,require:true},
 
});

module.exports=mongoose.model("User",userModel);