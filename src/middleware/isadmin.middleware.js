import usermodel from "../models/user.model.js"


const isadmin = async(req,res,next)=>{

   try{
     const user = await usermodel.findById(req.user.userid)
    if(!user.isadmin){
        return res.json({
            message:"admin id required",
            success:true
        })
    }

     next()
   }
   catch(err){
    res.json({
        message:err.message,
        success:true
    })
   }








    
}

export default isadmin