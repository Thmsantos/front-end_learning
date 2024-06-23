const database = require('../config/index')
const tabela = require('../models/carrinhoModels')

class carrinhoControllers {

    static async adicionar(req, res){
        await database.sync()
        let requisicao = await tabela.create(req.body)
        res.status(200).json('foi')
    }

    static async PuxarTodos(req, res) {
        await database.sync();
        let data = await tabela.findAll({ raw: true });
        let array = Object.keys(data)
        let registros = Object.values(data)
        res.status(200).json(registros)
    }

    static async Somar(req, res){
        await database.sync();

        let data = await tabela.findAll({raw : true})
        let registros = Object.values(data)
        let total = 0
        for(let i = 0; i < registros.length; i++){
            total = total + parseInt(registros[i].Valor)
        }
        let dados = [total, registros.length]
        res.status(200).json(dados)
    }

    static async LimpaCarrinho(req, res) {
        await database.sync();

        let requisição = await tabela.destroy({where: {}, truncate: true})

        res.send('limpou')
    }
}

module.exports = carrinhoControllers;