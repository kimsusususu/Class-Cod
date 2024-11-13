const { Sequelize,DataTypes } = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define(
    "User",
    {
        //원래 자동생성되는 id를 나는 user_name을 기본키로 설정했기때문에 지정해줘야한다
        user_num: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false,
        },
    },
    {
        //다른 모델 옵션들 적는 곳
        timestamps: false,
    }
);

module.exports = User;