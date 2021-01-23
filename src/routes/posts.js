import { Router } from 'express';
import models from '../models';

const router = Router();

router.post('/', (req, res) => {
  const { name, description } = req.body;
  models.Post.create({ name, description }).then(
    ({ id, name, description }) => {
      res.status(201).json({ id, name, description });
    }
  );
});

router.get('/', (req, res) => {
  models.Post.findAll({ attributes: ['id', 'name', 'description'] }).then(
    (posts) => {
      res.json(posts);
    }
  );
});

router.delete('/:id', (req, res) => {
  const postsWithId = { where: { id: req.params.id } };
  models.Post.findAll({
    ...postsWithId,
    attributes: ['id', 'name', 'description'],
  }).then(async ([post]) => {
    await models.Post.destroy(postsWithId);
    // Challenge asks for content to be returned after deleting a post, so no HTTP 204
    res.json(post);
  });
});

export default router;
