const database = require('../config/index')
const tabela = require('../models/CursosModels')

class CursosControllers{
    static async PuxarTodos(req, res){
        await database.sync();
        let data = await tabela.findAll({raw : true});
        let array = Object.keys(data)
        let registros = Object.values(data)
        for(let i = 0; i < array.length; i++){
            console.log(registros[i].NomeCurso)
        }
        res.status(200).json(registros)
    }
}

module.exports = CursosControllers;