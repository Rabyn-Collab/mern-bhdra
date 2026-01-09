import express from 'express';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/productController.js';
import { productSchema, validator } from '../utlis/validator.js';
import { fileCheck, updateFileCheck } from '../middleware/fileCheck.js';
import mongoose from 'mongoose';
import { notAllowed } from '../utlis/notAllowed.js';



const router = express.Router();

router.param('id', (req, res, next, id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ message: "Invalid id" });
  req.productId = id;
  next();
});

router.route('/').get(getProducts).post(validator.body(productSchema), fileCheck, createProduct).all(notAllowed);


router.route('/:id').get(getProduct).patch(updateFileCheck, updateProduct).delete(deleteProduct).all(notAllowed);




export default router;