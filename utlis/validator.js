import validation from 'express-joi-validation';
import Joi from 'joi';



export const validator = validation.createValidator({});

export const productSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  detail: Joi.string().required(),
  price: Joi.number().required(),
  stock: Joi.number().required(),
  image: Joi.string().required(),
  category: Joi.string().allow("men's clothing", "women's clothing", "jewelery", "electronics", "food").required(),
  brand: Joi.string().required()
});
