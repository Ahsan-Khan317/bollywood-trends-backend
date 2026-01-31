import mongoose from "mongoose";

const dbconnect = async()=>{
try{
    await mongoose.connect(process.env.MONGO_URI,{
        serverSelectionTimeoutMS:5000,
    })
    console.log("db connected successfully")
}
catch(err){
    console.log(err.message)
    console.log("db not connected")
}



}
export default dbconnect