import express from 'express';
import { notAllowed } from '../utlis/notAllowed.js';
import { checkUser } from '../middleware/checkUser.js';
import { createOrder, getOrders } from '../controllers/orderController.js';





const router = express.Router();

router.route('/').get(checkUser, getOrders).post(checkUser, createOrder).all(notAllowed);



export default router;

