import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
  console.info(req.body);
  res.json({ message: 'Post created' });
});

router.get('/', (req, res) => {
  res.json([{ id: 4, name: 'slkdjhf', description: 'Lorem ipsum 1' }]);
});

router.delete('/:postId', (req, res) => {
  const { postId } = req.params;
  res.json({ postId });
});

export default router;
