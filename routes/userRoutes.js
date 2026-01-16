import express from 'express';
import { loginUser } from '../controllers/userController.js';
import { loginSchema, validators } from '../utils/validators.js';





const router = express.Router();


router.route('/users/login').post(validators.body(loginSchema), loginUser);


export default router;