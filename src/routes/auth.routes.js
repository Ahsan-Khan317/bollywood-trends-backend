import express from "express"
import signup from "../controllers/auth.controller/signup.js"
import login from "../controllers/auth.controller/login.js"
const authroute = express.Router()


authroute.post("/signup",signup)
authroute.post("/login",login)
export default authroute