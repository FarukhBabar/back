import  Jwt  from "jsonwebtoken";


const verifytoken = (req ,  res , next)=>{
    const token = req.header('Authorization')
    if(!token){
        return res.send("no token assigned")
    }
    try {
        const decord=Jwt.verify(token , process.env.JWT_KEY)
        req.user = decord.id
        if(decord.role!=="admin"){
          return res.status(401).send({Message: "Invalid Role"})
        }
        // next()
    } catch (error) {
        console.log(error)
    }
}
export default verifytoken