import jwt from "jsonwebtoken"

const jwt_token = (user)=>{
return jwt.sign({userid:user._id},process.env.KEY,{expiresIn:"7d"})


}

export default jwt_token