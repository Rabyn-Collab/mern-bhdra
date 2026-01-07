import express from 'express';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/productController.js';
import { productSchema, validator } from '../utlis/validator.js';




const router = express.Router();

router.route('/products').get(getProducts).post(validator.body(productSchema), createProduct);
router.route('/products/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);




export default router;