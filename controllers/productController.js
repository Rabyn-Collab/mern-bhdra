import Product from "../models/Product.js"
import fs from "fs";


export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    return res.status(200).json(products);
  } catch (err) {
    return res.status(400).json({
      message: err.message
    })

  }
}

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.productId);
    if (!product) return res.status(404).json({ message: "Product not found" });
    return res.status(200).json(product);

  } catch (err) {
    return res.status(400).json({
      message: err.message
    })

  }
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


export const updateProduct = async (req, res) => {
  const { title, detail, price, stock, category, brand } = req.body || {};
  try {

    const isExist = await Product.findById(req.productId);
    if (!isExist) return res.status(404).json({ message: "Product not found" });
    isExist.title = title || isExist.title;
    isExist.detail = detail || isExist.detail;
    isExist.price = price || isExist.price;
    isExist.stock = stock || isExist.stock;
    isExist.category = category || isExist.category;
    isExist.brand = brand || isExist.brand;

    if (req.imagePath) {

      isExist.image.forEach((item) => {
        fs.unlink(`./uploads/${item}`, async (err) => {
          if (err) return res.status(500).json({ message: "Something went wrong" });

        });
      })

      isExist.image = req.imagePath;
      await isExist.save();
      return res.status(200).json({ message: "Product updated" });

      // fs.unlink(`./uploads/${isExist.image}`, async (err) => {
      //   if (err) return res.status(500).json({ message: "Something went wrong" });
      //   isExist.image = req.imagePath;
      //   await isExist.save();
      //   return res.status(200).json({ message: "Product updated" });
      // });
    } else {
      await isExist.save();
      return res.status(200).json({ message: "Product updated" });
    }


  } catch (err) {

  }
}


export const deleteProduct = async (req, res) => {
  try {

    const isExist = await Product.findById(req.productId);
    if (!isExist) return res.status(404).json({ message: "Product not found" });


    isExist.image.forEach((img) => {
      fs.unlink(`./uploads/${img}`, async (err) => {
        if (err) return res.status(500).json({ message: "Something went wrong" });

      });
    });

    await isExist.deleteOne();
    return res.status(200).json({ message: "Product deleted" });


  } catch (err) {
    return res.status(400).json({
      message: err.message
    })

  }
}


