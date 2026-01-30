import cart_model from "../../models/cart.model.js";
import product_model from "../../models/product.model.js";

const get_cart = async (req, res) => {
  try {
    const userid = req.user.userid;
    const cart = await cart_model
      .findOne({ user: userid })
      .populate(
        "items.product",
        " name price sizes rating stock price_before_discount ",
      );
 
    if (!cart) {
     return res.json({
        message: "cart item not found",
        success:false
      });
    }

    let totalAmount=0;

    let total_qty=0;
    let total_price_before_discount=0;

    const finaldata = cart.items.map((item) => {
      const qty = item.qty;
      const price = item.qty * item.product.price;
      const price_before_discount =
        item.product.price_before_discount * item.qty;

      totalAmount += price;
      total_price_before_discount += price_before_discount;
      total_qty += qty;

      return {
        id:item.product._id,
        name: item.product.name,
        price,
        rating: item.product.rating,
        stock: item.product.stock,
        sizes: item.product.sizes,
        qty,
      };
    });

       const total_discount =
      total_price_before_discount > 0
        ? (
            ((total_price_before_discount - totalAmount) /
              total_price_before_discount) *
            100
          ).toFixed(2)
        : 0;

    res.json({
      data: {
        items: finaldata,
        totalAmount,
        total_price_before_discount,
        total_qty,
        total_discount,
      },
      success: true,
    });
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
};

export default get_cart;
