import Order from "../models/Order.js";




export const getOrders = async (req, res) => {

  try {

    const role = req.role;
    if (role === "user") {
      const orders = await Order.find({ user: req.userId }).populate([{
        path: 'products.product'

      },
      {
        path: 'user',
        select: '-password'
      }

      ]);
      return res.status(200).json(orders);
    } else if (role === "admin") {
      const orders = await Order.find({}).populate('userId');
      return res.status(200).json(orders);
    }


  } catch (err) {
    return res.status(400).json({
      message: err.message
    })
  }

}

export const createOrder = async (req, res) => {
  const { totalAmount, products } = req.body || {};
  try {

    await Order.create({ totalAmount, products, user: req.userId });
    return res.status(201).json({ message: "Order created successfully" });

  } catch (err) {
    return res.status(400).json({
      message: err.message
    })
  }
}