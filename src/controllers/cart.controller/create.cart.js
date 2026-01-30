import cart_model from "../../models/cart.model.js";
import product_model from "../../models/product.model.js";
const create_cart = async (req, res) => {
  try {
    const userid = req.user.userid;
    const product_id = req.params.id;
    const product = await product_model.findById(product_id);
    const cart = await cart_model.findOne({ user: userid });
    if (!product )
    {  return res
        .status(404)
        .json({ message: "product not found", success: false });}

if(product.stock < 1){
  return  res
        .status(404)
        .json({ message: "product out of stock", success: false });
}



    if (!cart) {
      const result = await cart_model.create({
        user: userid,
        items: [{ product: product_id, qty: 1 }],
      });
      return res.status(201).json({
        message: `${product.name} is added to cart successfully`,
        success: true,
      });
    }

    const item_index = cart.items.findIndex(
      (item) => item.product.toString() === product_id,
    );

    if (item_index > -1 ) {
if(cart.items[item_index].qty < product.stock ) {cart.items[item_index].qty += 1}
else{ return res.status(400).json({message:"product ! out of stock"})}

    } else {
      cart.items.push({ product: product_id, qty: 1 });
    }

    await cart.save();

    return res.status(200).json({
      message: "Cart updated successfully",
      success: true,
      cart,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
      success: false,
    });
  }
};

export default create_cart;
