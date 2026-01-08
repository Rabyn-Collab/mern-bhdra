import Product from "../models/Product.js"



export const getProducts = (req, res) => {
  return res.status(200).json({
    message: "List of products"
  })
}

export const getProduct = (req, res) => {
  return res.status(200).json({
    message: "Product details"
  })
}


export const createProduct = async (req, res) => {
  const { title, detail, price, stock, category, brand } = req.body;
  try {

    await Product.create({
      title,
      detail,
      price,
      stock,
      image: req.imagePath,
      category,
      brand
    });

    return res.status(201).json({
      message: "Product created Successfully"
    })

  } catch (err) {
    return res.status(400).json({
      message: err.message
    })

  }
}


export const updateProduct = (req, res) => {
  return res.status(200).json({
    message: "Product updated"
  })
}


export const deleteProduct = (req, res) => {
  return res.status(200).json({
    message: "Product deleted"
  })
}


