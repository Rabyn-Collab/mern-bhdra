import express from "express";
import { createPost, getAllPosts, getPostById } from "../controllers/postController.js";
import { checkUser } from "../middleware/checkUser.js";
import { checkFile } from "../middleware/checkFile.js";


const router = express.Router();


router.route('/').get(getAllPosts).post(checkUser, checkFile, createPost);
router.route('/:id').get(getPostById).patch(checkUser, createPost).delete(checkUser, createPost);


export default router;


