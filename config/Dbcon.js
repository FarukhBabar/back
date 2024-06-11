import mongoose from "mongoose"


let DbConnection = ()=>{
    try {
        mongoose.connect("mongodb://localhost:27017/Homelocal")
        console.log("Database Connected Sucessfully")
    } catch (error) {
        console.log("Error in Database Connection") 
    }
}
export default DbConnection