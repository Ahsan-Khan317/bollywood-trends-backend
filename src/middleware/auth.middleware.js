import jwt from "jsonwebtoken"

const  auth = async (req,res,next)=>{

const authorization = req.headers.authorization;

const token = authorization.split(" ")[1];
if(!token){
return res.json({
    message:"token not available"

})
}

const decode = jwt.verify(token,process.env.KEY);

req.user=decode;

next()




}

export default auth