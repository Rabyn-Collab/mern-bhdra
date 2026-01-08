import express from 'express';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/productController.js';
import { productSchema, validator } from '../utlis/validator.js';
import { fileCheck } from '../middleware/fileCheck.js';




const router = express.Router();

router.route('/products').get(getProducts).post(validator.body(productSchema), fileCheck, createProduct);
router.route('/products/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);




export default router;