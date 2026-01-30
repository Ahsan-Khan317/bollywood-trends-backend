import mongoose from "mongoose";

const product_item = new mongoose.Schema({
product:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"products",
    required:true
},
name:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true
},
qty:{
    type:Number,
    required:true
},
sub_total:{
    type:Number,
    required:true
}

})






const Orderschema = new mongoose.Schema({
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:true
},

items:[product_item],


shipping_address:{
address:{
    type:String,
    required:true
},
city:{
    type:String,
    required:true
},
pincode:{
    type:String,
    required:true
}
},

payment_method:{
    type:String,
    enum:["COD","CARD","UPI"],
    default:"COD"
},

order_status:{
type:String,
enum:["PLACED","CONFIRMED","SHIPPED","DELIVERED","CANCELLED"],

default:"PLACED"

},

payment_status:{
type:String,
enum:["PENDING","PAID","FAILED","REFUNDED"],

default:"PENDING"

},
total_price:{
    type:Number,
    required:true
}


},{timestamps:true})

const order_model = mongoose.model("order",Orderschema);


export default order_model