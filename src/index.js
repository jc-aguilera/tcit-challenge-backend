import 'dotenv/config';
import routes from './routes';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import models, { sequelize } from './models';

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/posts', routes.posts);

const eraseDatabaseOnSync = false;

const createPosts = () => {
  models.Post.bulkCreate([
    {
      name: 'Post 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Post 2',
      description:
        'Aliquam quis mi quam. Sed venenatis ac libero vel molestie.',
    },
    {
      name: 'Post 3',
      description:
        'Vivamus ornare mi sed mauris egestas, non pretium augue ultricies.',
    },
  ]);
};

sequelize.sync({ force: eraseDatabaseOnSync }).then(() => {
  if (eraseDatabaseOnSync) {
    createPosts();
  }
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
  );
});
