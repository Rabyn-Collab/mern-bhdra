import express from 'express';
import { notAllowed } from '../utlis/notAllowed.js';
import { loginUser, registerUser } from '../controllers/userController.js';
import { userFileCheck } from '../middleware/userFileCheck.js';
import { loginSchema, registerSchema, validators } from '../utlis/validator.js';
import { checkUser } from '../middleware/checkUser.js';


const router = express.Router();



router.route('/login').post(checkUser, validators.body(loginSchema), loginUser).all(notAllowed);
router.route('/register').post(validators.body(registerSchema), userFileCheck, registerUser).all(notAllowed);



export default router;