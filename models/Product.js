import mongoose from "mongoose";


const productSchema = new mongoose.Schema({

  title: {
    type: String,
    minLength: [3, "Title must be at least 3 characters long"],
    maxLength: [100, "Title must be at most 100 characters long"],
    required: true
  },

  detail: {
    type: String,

    required: true
  },

  price: {
    type: Number,
    validate: {
      validator: (value) => {
        return value >= 0;
      },
      message: "Price must be non-negative"
    },
    required: true
  },

  stock: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },

  image: {
    type: Array,
    validate: {
      validator: (arr) =>
        Array.isArray(arr) &&
        arr.length > 0 &&
        arr.every(
          (img) => typeof img === "string" && img.trim() !== ""
        ),
      message: "Image must be an array of non-empty strings"
    }
  },

  category: {
    type: String,
    enum: {
      values: ["men's clothing", "women's clothing", "jewelery", "electronics", "food"],
      message: "{VALUE} is not supported"
    },
    required: true
  },

  brand: {
    type: String,
    enum: {
      values: ["apple", "samsung", "nike", "adidas", "puma", "tanishq", "kfc"],
      message: "{VALUE} is not supported"
    },
    required: true
  }


}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;