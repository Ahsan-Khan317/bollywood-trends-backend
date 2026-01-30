import order_model from "../../models/order.model.js";

const cancel_order = async (req, res) => {
  try {
    const order_id = req.params.id;
    const order = await order_model.findByIdAndUpdate(
      order_id,
      { $set: {order_status:"CANCELLED"} },
      { new: true, runValidators: true }
    );

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Order cancelled successfully",
      success: true,
      order
    });

  } catch (err) {
    return res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};

export default cancel_order;
