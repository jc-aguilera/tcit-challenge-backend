import { DataTypes, Sequelize } from 'sequelize';
import post from './post';

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  }
);

const models = {
  Post: post(sequelize, DataTypes),
};

export { sequelize };
export default models;
