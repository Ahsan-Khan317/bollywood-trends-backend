import order_model from "../../models/order.model.js";

const update_order = async (req, res) => {
  try {
    const order_id = req.params.id;
    const { order_status_value, payment_status_value } = req.body;

    if (!order_status_value && !payment_status_value) {
      return res.status(400).json({
        message: "Nothing to update",
        success: false,
      });
    }

    const updateData = {};
    if (order_status_value) updateData.order_status = order_status_value;
    if (payment_status_value) updateData.payment_status = payment_status_value;

    const order = await order_model.findByIdAndUpdate(
      order_id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Order updated successfully",
      success: true,
      order,
    });

  } catch (err) {
    return res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};

export default update_order;
