import product_model from "../../models/product.model.js"

const read = async(req,res)=>{
try{
     const result = await product_model.find()
  
      res.status(200).json({
        data:result,
        success:true
     })

}
catch(err){
    res.status(err.statuscode || 400).json({
        message:err.message,
        success:false
    })
}



}

export default read