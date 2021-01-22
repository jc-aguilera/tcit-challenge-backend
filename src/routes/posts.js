import { Router } from 'express';
import models from '../models';

const router = Router();

router.post('/', (req, res) => {
  const { name, description } = req.body;
  models.Post.create({ name, description })
    .then(() =>
      models.Post.findAll({ attributes: ['id', 'name', 'description'] })
    )
    .then((posts) => res.json(posts));
});

router.get('/', (req, res) => {
  models.Post.findAll({ attributes: ['id', 'name', 'description'] }).then(
    (posts) => {
      res.json(posts);
    }
  );
});

router.delete('/', (req, res) => {
  const postsWithId = { where: { id: req.body.id } };
  models.Post.findAll({
    ...postsWithId,
    attributes: ['id', 'name', 'description'],
  }).then(async ([post]) => {
    await models.Post.destroy(postsWithId);
    res.json(post);
  });
});

export default router;
