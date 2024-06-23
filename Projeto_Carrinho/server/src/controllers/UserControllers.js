const database = require('../config/index')
const tabela = require('../models/UserModels')

class LoginControllers{
    static async Cadastrar(req, res){
        await database.sync()
        let data = await tabela.findAll({raw : true});
        let array = Object.keys(data)
        let registros = Object.values(data)
        let verificacao = true
        for(let i = 0; i < array.length; i++){
            console.log(req.body.Nome, registros[i].Nome)
            if(req.body.Nome == registros[i].Nome){
                verificacao = false
            }
        }
        if(verificacao == true){
            const resultadoCreate = await tabela.create(req.body)
            console.log(resultadoCreate);
            res.status(200).json("cadastrado")
        }

        if(verificacao == false){
            res.send('usuario existente')
        }
    }

    static async Login(req, res){
        await database.sync();
        let data = await tabela.findAll({raw : true});
        let array = Object.keys(data)
        let registros = Object.values(data)
        let verificacao = false
        for(let i = 0; i < array.length; i++){
            if(req.body.Senha == registros[i].Senha && req.body.Nome == registros[i].Nome){
                verificacao = true
            }
        }
        if(verificacao == true){
            res.status(200).json(1)
        }else{
            res.send('login invalido')
        }
    }
}

module.exports = LoginControllers;