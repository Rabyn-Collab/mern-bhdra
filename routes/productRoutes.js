import express from 'express';
import { createProduct, getProducts } from '../controllers/productController.js';



const router = express.Router();

router.route('/products').get(getProducts).post(createProduct);
//router.route('/products/:id').get().patch().delete();




export default router;