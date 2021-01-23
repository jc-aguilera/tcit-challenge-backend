import { Router } from 'express';
import controllers from '../controllers';

const router = Router();
const { posts } = controllers;

router.post('/', posts.createPost);
router.get('/', posts.listPosts);
router.delete('/:id', posts.deletePost);

export default router;
