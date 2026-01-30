import jwt_token from "../../utils/token.generator.js"
import usermodel from "../../models/user.model.js"
import bcrypt from "bcrypt"
const login = async(req,res)=>{

try{
const {email,password}=req.body

const emailfinder= await usermodel.findOne({email});
if(!emailfinder){
    return res.send("user not found")
}

const checkpassword = await bcrypt.compare(password,emailfinder.password)
if(!checkpassword){
    return res.send("wrong password try again !")
}

const token = jwt_token(emailfinder);
res.json({
    token,
    success:true
})








}
catch(err){
    res.send(err.message)
}










}

export default login