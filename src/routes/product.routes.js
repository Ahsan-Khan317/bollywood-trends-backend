import express from "express";
import create_product from "../controllers/product.controller/create.js";
import auth from "../middleware/auth.middleware.js";
import isadmin from "../middleware/isadmin.middleware.js";
import read from "../controllers/product.controller/read.js";
import update from "../controllers/product.controller/update.js";
import deletes from "../controllers/product.controller/delete.js";
import readbyid from "../controllers/product.controller/readbyid.js";
const product_router = express.Router();

product_router.post("/create/product/api", auth, isadmin, create_product);
product_router.get("/read/product/api", auth,read);
product_router.get("/readbyid/product/api/:id", auth,readbyid);
product_router.patch("/update/product/api/:id", auth, isadmin, update);
product_router.delete("/delete/product/api/:id", auth, isadmin, deletes);

export default product_router;
