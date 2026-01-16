import Joi from 'joi';
import validate from 'express-joi-validation';



export const validators = validate.createValidator();


export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(4).max(50).required(),
});