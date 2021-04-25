import './env';
import express from 'express';
import route from './routes';
import sequelize from 'sequelize';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', route);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
  sequelize
    .sync({ force: false })
    .then(() => {
      console.log('Sequelize mapping success');
    })
    .catch((error) => {
      console.log('Sequelize mapping fail' + error);
    });
});
