import express from 'express';
import { notAllowed } from '../utils/notAllowed.js';
import { loginUser } from '../controllers/usetController.js';
import { registerSchema, userSchema, validators } from '../utlis/validator.js';



const router = express.Router();

router.route('/login').post(validators.body(userSchema), loginUser).all(notAllowed);
router.route('/register').post(validators.body(registerSchema), registerUser).all(notAllowed);


export default router;