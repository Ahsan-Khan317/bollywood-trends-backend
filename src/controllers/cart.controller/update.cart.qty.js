import cart_model from "../../models/cart.model.js";
const update_qty = async (req, res) => {
  try {
    const userid = req.user.userid;
    const product_id = req.params.id;
    const { task } = req.body;
    const cart = await cart_model
      .findOne({ user: userid })
      .populate("items.product");
    if (!cart) {
      return res.json({
        messaage: "no any added to cart",
        success: false,
      });
    }

    if (task === "+") {
    if(items.product.stock == cart.items.qty )return res.json({message:"product out of stock"})
      await cart_model.updateOne(
        { user: userid, "items.product": product_id },
        { $inc: { "items.$.qty": 1 } },
      );
    }

    if (task === "-") {
      const item = cart.items.find(
        (e) => e.product.toString() === product_id.toString(),
      );
      if (item.qty < 2) {
        await cart_model.findOneAndUpdate(
          { user: userid },
          { $pull: { items: { product: product_id } } },
        );
      } else {
        await cart_model.updateOne(
          { user: userid, "items.product": product_id },
          { $inc: { "items.$.qty": -1 } },
        );
      }
    }
    return res.json({
      message: "cart-quantity update successfully",
    });
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
};

export default update_qty;
