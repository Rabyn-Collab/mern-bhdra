import validation from 'express-joi-validation';
import Joi from 'joi';



export const validators = validation.createValidator({});

export const productSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  detail: Joi.string().required(),
  price: Joi.number().required(),
  stock: Joi.number().required(),
  category: Joi.string().valid("men's clothing", "women's clothing", "jewelery", "electronics", "food").required(),
  brand: Joi.string().valid("apple", "samsung", "nike", "adidas", "puma", "tanishq", "kfc").required(),
  image: Joi.any()
});


export const registerSchema = Joi.object({
  username: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  bio: Joi.string().required()
});




export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
});