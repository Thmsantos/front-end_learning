const database = require("../config/index");
const Sequelize = require("sequelize");

const UserModels = database.define("user", {
    id: {
        type: Sequelize.INTEGER(4),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    Nome: Sequelize.STRING(100),
    Senha: Sequelize.STRING(100)
});

database.sync();

module.exports = UserModels;