import app  from "./app.js"
import dotenv from "dotenv"
import dbconnect from "./config/db.connect.js"
dotenv.config()
const port = process.env.PORT || 5500 
 dbconnect().then(()=>{
try{
    app.listen(port,()=>{
  
    console.log("server started")
})
}
catch(err){
 console.log(err.message)
}





 }



 )