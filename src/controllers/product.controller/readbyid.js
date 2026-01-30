import product_model from "../../models/product.model.js"

const readbyid = async(req,res)=>{
try{
     const result = await product_model.findById({_id:req.params.id})
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

export default readbyid