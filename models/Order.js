import mongoose from 'mongoose';



const orderSchema = new mongoose.Schema({

  totalAmount: {
    type: Number,
    required: true
  },
  products: {
    type: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },
        quantity: {
          type: Number,
          required: true
        }
      }
    ],
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }


}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
export default Order;



