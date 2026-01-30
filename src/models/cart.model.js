import mongoose from "mongoose";

const cart_item_schema= new mongoose.Schema({
product:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"products"
},
qty:{
    type:Number,
    required:true,
    min:1,
    default:1

}


})


const cart_schema = new mongoose.Schema({
user:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"user"
},
items:[cart_item_schema],


},{timeStamps:true})

const cart_model = mongoose.model("cart",cart_schema)
export default cart_model