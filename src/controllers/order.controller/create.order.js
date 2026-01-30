import cart_model from "../../models/cart.model.js";
import product_model from "../../models/product.model.js";
import order_model from "../../models/order.model.js";

const create_order = async (req, res) => {
  try {
    const userid = req.user.userid;

    const { type, product_id, shipping_address, payment_method } = req.body;
    let order_item = [];
    let total_price = 0;

    if (type === "cart") {
      const cart = await cart_model
        .findOne({ user: userid })
        .populate("items.product");

      if (!cart || cart.items.length === 0)
        return res.json({ message: "cart is empty", success: false });
      for (let item of cart.items) {
        const product = item.product;
        const sub_total = product.price * item.qty;
        total_price += sub_total;
        if(product.stock< item.qty) return res.json({ message: `${product.name} is out of stock`, success: false });

        order_item.push({
          product: product._id,
          name: product.name,
          price: product.price,
          qty: item.qty,
          sub_total,
        });

        product.stock -= item.qty;
        await product.save();
      }

      cart.items = [];
      await cart.save();
    } else if (type === "buy_now") {
      if (!product_id)
        return res.json({ message: "product id or qty not given" });
      const product = await product_model.findById(product_id);
      if (!product || product.stock < 1)
        return res.json({ message: "product not found" });
      order_item.push({
        product: product_id,
        name: product.name,
        price: product.price,
        qty: 1,
        sub_total: product.price,
      });
      total_price = product.price;

      product.stock -= 1;
      await product.save();
    }

    const order = await order_model.create({
      user: userid,
      items: order_item,
      shipping_address,
      payment_method,
      total_price,
         order_status: "PLACED",
      payment_status: "PENDING",
    });

    res.json({
      message: "Order confirmed",
      result: order,

      success: true,
    });
  } catch (error) {
    res.json({
      error: error.message,
      success: true,
    });
  }
};

export default create_order;
