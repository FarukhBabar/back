import mongoose from "mongoose";

let userModel = new mongoose.Schema(
    {
        Companynname:{
        type:String,
        require:true
        },
        CompanyRegistration:{
            type:String
        },
        CompanyVat:{
            type:String
        },
        Address1:{
            type:String,
            require:true
        },
        Address2:{
            type:String,
            require:true
        },
        Address3:{
            type:String,
            require:true
        },
        Postcode:{
            type:String,
            require:true
        },
        City:{
            type:String,
            require:true
        },
        County:{
            type:String,
            require:true
        },
        Country:{
            type:String,
           
        },
        Title:{
            type:String,
            require:true
        },
        FirstName:{
            type:String,
            require:true
        },
        LastName:{
            type:String,
            require:true
        },
        PhoneNumber:{
            type:String,
            require:true
        },
        email:{
            type :String, 
            required: true
        },
        password:{
            type :String, 
            required: true
        },
       role:{
            type :String, 
            required: true,
            default: "user",
        },
        
    otp:{
        type:String,
    },

    otpexpires:{
        type: Date
    }
       
    },{
        timestamps : true
    }
)

const User = mongoose.model('users' , userModel)
export default  User