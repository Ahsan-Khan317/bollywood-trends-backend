import express from "express";
import create_order from "../controllers/order.controller/create.order.js";
import auth from "../middleware/auth.middleware.js"
import isadmin from "../middleware/isadmin.middleware.js"
import update_order from "../controllers/order.controller/update.order.js"
import cancel_order from "../controllers/order.controller/cancel.order.js";
const orderRoutes = express.Router();

orderRoutes.post("/create/order", auth, create_order);
orderRoutes.post("/update/order/:id",auth,isadmin,update_order)
orderRoutes.post("/cancel/order/:id",auth,cancel_order)
export default orderRoutes;
