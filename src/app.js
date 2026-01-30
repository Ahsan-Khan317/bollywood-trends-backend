import express from "express"
import authroute from "./routes/auth.routes.js"
import product_router from "./routes/product.routes.js"
import cartRoutes from "./routes/cart.routes.js"
import orderRoutes from "./routes/order.routes.js"
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/bollywood",authroute)
app.use("/bollywood",product_router)
app.use("/bollywood",cartRoutes)
app.use("/bollywood",orderRoutes)

export default app