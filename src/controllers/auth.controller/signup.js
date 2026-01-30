import jwt_token from "../../utils/token.generator.js"
import usermodel from "../../models/user.model.js"
import bcrypt from "bcrypt"
const signup = async (req,res)=>{
    
try{
    const {name,email,password,isadmin}=req.body
  if(!name  ||  !email  ||!password){

   return res.send("fill all the input")
 
}
const existinguser =await usermodel.findOne({email})

if(existinguser){
    return res.send("user already exist ")
}

const hash = await bcrypt.hash(password,10)

const user = await usermodel.create({
    name,
    email,
    password:hash,
    isadmin
})

const token = jwt_token(user)
if(token){
    res.json({
        token,success:true
    })
}
}
catch(err){
    res.send(err.message)
}



}

export default signup 