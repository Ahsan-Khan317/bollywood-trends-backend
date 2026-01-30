import product_model from "../../models/product.model.js"

const create_product = async(req,res)=>{

  try{
      const result =await product_model.create(req.body)
          res.json({
            message:"product created in db ",
            result,
            success:true
          })


  }
  catch(err){
    res.status(err.statuscode || 400).json({
        message:err.message
    })
  }




}

export default create_product
