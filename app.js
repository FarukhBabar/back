import express from "express"
import DbConnection from "./config/Dbcon.js"
import cors from "cors"
import dotenv from 'dotenv'
import router from "./Routers/Routerath.js"
import Getdata from "./Routers/Gettingdata.js"
import FreeSchema from './config/Sundayschema.js'
import SmokinSchema from './config/Smokingess.js'
import userrouter from './Routers/user.routes.js'
const app = express()
app.use(express.json())
DbConnection()

app.use(cors())
dotenv.config()
app.use(userrouter)
app.use("/api/v1/auth" , router)
app.use("/api/v1/data" , Getdata)
app.use('/uploads', express.static('uploads'))

app.get("/singalepage/:id", async (req, res) => {
    let result = await FreeSchema.findOne({_id: req.params.id})
    return res.send(result)
  })
  app.get("/smokingsingalepage/:id", async (req, res) => {
    let result = await SmokinSchema.findOne({_id: req.params.id})
    return res.send(result)
  })


app.listen(8001 , ()=>{
    console.log("app is running on port 8001")
})
