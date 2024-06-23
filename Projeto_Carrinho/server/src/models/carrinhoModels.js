const database = require("../config/index");
const Sequelize = require("sequelize");

const CursosModels = database.define("carrinho", {
    id: {
        type: Sequelize.INTEGER(4),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    NomeCurso: Sequelize.STRING(100),
    Valor: Sequelize.DECIMAL(5,2)
});

database.sync();

module.exports = CursosModels;
