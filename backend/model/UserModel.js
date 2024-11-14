const mongoose =require("mongoose");

const UserModel=new mongoose.Schema({
        name:String,
        email:String,
        age:String,
})

const user=mongoose.model("CRUD",UserModel);
module.exports=user;