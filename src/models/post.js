const post = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.STRING,
    },
  });

  return Post;
};

export default post;
