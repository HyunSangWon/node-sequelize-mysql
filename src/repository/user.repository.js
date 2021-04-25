import User from '../database/models/user.model';
export const findOne = async (userId) => {
  return await User.findOne({
    attributes: ['id', 'name', 'createdAt'],
    where: {
      id: userId,
    },
  });
};

export const create = async (user) => {
  return await User.create(user);
};

export const update = async (user) => {
  return await User.update(user, {
    where: { uid: user.id },
  });
};
