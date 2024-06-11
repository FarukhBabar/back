import mongoose from "mongoose";


let DigitalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type :String,
        required:true
    } ,
    image:{
        type:String,
        
    }
})

export default mongoose.model("Digitalproducts" , DigitalSchema)