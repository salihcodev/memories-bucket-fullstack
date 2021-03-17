import express from 'express';

// controllers funcs:
import { getPosts, createPosts } from '../controllers/posts.js';

// create posts base router.
const router = express.Router();

router.get('/', getPosts);
router.post('/', createPosts);

export default router;
