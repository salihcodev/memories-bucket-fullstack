import express from 'express';

// controllers funcs:
import { getPosts, createPosts, updatePost } from '../controllers/posts.js';

// create posts base router.
const router = express.Router();

router.get('/', getPosts);
router.post('/', createPosts);
router.patch('/:id', updatePost);

export default router;
