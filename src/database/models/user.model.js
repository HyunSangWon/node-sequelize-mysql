import { Model, DataTypes } from 'sequelize';
import sequelize from '..';
import moment from 'moment';

class User extends Model {}
User.init(
  {
    id: {
      type: DataTypes.STRING(30),
      primaryKey: true,
      field: 'id',
      comment: '아이디',
    },
    password: {
      type: DataTypes.STRING(100),
      field: 'password',
      comment: '비밀번호',
    },
    name: {
      type: DataTypes.STRING(20),
      field: 'name',
      comment: '유저 이름',
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'created_at',
      comment: '주문 접수 날짜',
      get() {
        return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD');
      },
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'updated_at',
      comment: '주문 접수 날짜',
      get() {
        return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD');
      },
    },
  },
  {
    sequelize,
    modelName: 'user',
  }
);

export default User;
