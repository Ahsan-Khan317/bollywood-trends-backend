import product_model from "../../models/product.model.js"

const deletes = async(req,res)=>{
try{
     const result = await product_model.findByIdAndDelete(req.params.id)
     res.status(200).json({
        message:"deletd successfully",
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

export default deletes