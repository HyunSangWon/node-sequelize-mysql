import { create } from '../repository/user.repository';

export const create = (req, res) => {
  create(req, res)
    .then(() => {
      res.send(req.body);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};
