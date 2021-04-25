import Sequelize from 'sequelize';
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
//default로 PK, createAt, updatedAt을 생성해준다.
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
  define: {
    freezeTableName: true, //table을 복수형이 아닌 Model을 설정할때 이름 그래도 사용.
    underscored: true, //true이면 column이름을 camalCase가 아닌 underscore 방식
    timestamps: false, //Sequelize는 Select할때 자동으로 CreatedAt, UpdatedAt을 날리는데 이를 off 하는 설정.
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: (msg) => console.log(msg),
});

export default sequelize;
