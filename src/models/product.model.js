import mongoose from "mongoose";

const createproduct_schema= new mongoose.Schema({
sku:{
    type:String,
    required:true
},
name:{
    type:String,
    required:true
},
category:{
    type:String,
    required:true
},

price:{
    type:Number,
    required:true
},

currency:{
    type:String,
    required:true,
    default:"INR"
},

sizes:{
    type:[String],
    required:true
},

colors:{
    type:[String],
    required:true
},


images:{
    type:[String],
    required:true
},

description:{
    type:String,
    required:true
},
stock:{
    type:Number,
    required:true
},

rating:{
    type:Number,
    required:true
},


tags:{
    type:[String],
    required:true
},

featured:{
    type:Boolean,
    required:true
},
brand:{
    type:String,
    required:true
},
discount:{
    type:Number,
    required:true
},
price_before_discount:{
    type:Number,
    required:true
}






})

const product_model = mongoose.model("products",createproduct_schema)
export default  product_model