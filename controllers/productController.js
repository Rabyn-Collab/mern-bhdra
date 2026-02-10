import Product, { brand, category } from "../models/Product.js"
import fs from "fs";


export const top5Product = async (req, res) => {
  try {
    const product = await Product.find({
      rating: { $gt: 4 }
    }).limit(5);
    return res.status(200).json(product);
  } catch (err) {
    return res.status(400).json({
      message: err.message
    })
  }
}


function convertQuery(queryObj) {
  const mongoQuery = {};

  for (const key in queryObj) {
    const match = key.match(/(\w+)\[(\w+)\]/);

    if (match) {
      const field = match[1];      // rating
      const operator = match[2];   // gt

      if (!mongoQuery[field]) mongoQuery[field] = {};

      mongoQuery[field][`$${operator}`] = Number(queryObj[key]);
    } else {
      mongoQuery[key] = queryObj[key];
    }
  }

  return mongoQuery;
}
export const getProducts = async (req, res) => {

  const excludeFields = ["sort", "page", "limit", 'search', 'skip', 'fields'];

  try {

    const queryObj = { ...req.query };

    excludeFields.forEach((field) => delete queryObj[field]);


    const mongoQuery = convertQuery(queryObj);



    const query = Product.find(mongoQuery);


    // search

    if (req.query.search) {
      const searchValue = req.query.search;
      if (brand.includes(searchValue)) {
        query.find({ brand: { $regex: searchValue, $options: 'i' } });
      } else if (category.includes(searchValue)) {
        query.find({ category: { $regex: searchValue, $options: 'i' } });
      } else {
        query.find({ title: { $regex: searchValue, $options: 'i' } });
      }



    }



    // selects
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query.select(fields);
    }


    //sorts
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query.sort(sortBy);
    }



    //pagination
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const skip = (page - 1) * limit;
    query.skip(skip).limit(limit);



    const products = await query.skip(skip).limit(limit);


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

  const { title, detail, price, stock, category, brand, image } = req.body;
  try {

    await Product.create({
      title,
      detail,
      price,
      stock,
      image,
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


