import cart_model from "../../models/cart.model.js";

const remove_cart = async (req, res) => {
  try {
    const product_id = req.params.id;
    const user_id = req.user.userid;
    const cart = await cart_model.findOneAndUpdate(
      { user: user_id },
      {
        $pull: { items: { product: product_id } },
      },
      { new: true, runValidator: true },
    );
    if (!cart) {
      res.json({
        message: "cart item not found",
        success: false,
      });
    }
    res.json({
      message: "cart item removed successfully",
      success:true,
    });
  } catch (err) {
    res.json({
      message: err.message,
      success: true,
    });
  }
};

export default remove_cart;
