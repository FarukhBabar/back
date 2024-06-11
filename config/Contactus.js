import mongoose from "mongoose";


let ContactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type :String,
        required:true
    } ,
    message:{
        type :String,
        required:true
    } 
})

export default mongoose.model("Contactus" , ContactSchema)