import product_model from "../../models/product.model.js"

const update = async(req,res)=>{
try{
   const keys = ["sku", "name", "category", "price", "currency", "sizes", "colors", "images", "description", "stock", "rating", "tags", "featured", "brand", "discount", "price_before_discount"];
const updatedata = {};

for(let key in req.body){
    if(keys.includes(key)){
updatedata[key] = req.body[key];

    }
}

     const result = await product_model.findByIdAndUpdate(req.params.id,{$set:updatedata},{new:true,runValidators:true})
     res.status(200).json({
        result:result,
        message:"updated successfully",
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

export default update