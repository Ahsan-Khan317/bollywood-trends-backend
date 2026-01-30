import express from "express"
import auth from "../middleware/auth.middleware.js"

const cartRoutes = express.Router()
import create_cart from "../controllers/cart.controller/create.cart.js"
import get_cart from "../controllers/cart.controller/get.cart.js"
import remove_cart from "../controllers/cart.controller/remove.cart.js"
import update_qty from "../controllers/cart.controller/update.cart.qty.js"
cartRoutes.post("/create/cart/:id",auth,create_cart)
cartRoutes.get("/read/cart",auth,get_cart)
cartRoutes.delete("/remove/cart/:id",auth,remove_cart)
cartRoutes.post("/update/qty/cart/:id",auth,update_qty)






export default cartRoutes