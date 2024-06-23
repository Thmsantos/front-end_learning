const express = require('express');

const CursosControllers = require('../controllers/CursosControllers')
const UserControllers = require('../controllers/UserControllers')
const carrinhoControllers = require('../controllers/carrinhoControllers')
const router = express.Router();

router 
    .get('/cursos', CursosControllers.PuxarTodos)
    .post('/cad',UserControllers.Cadastrar)
    .post('/aut', UserControllers.Login)
    .get('/carrinho', carrinhoControllers.PuxarTodos)
    .delete('/limpar', carrinhoControllers.LimpaCarrinho)
    .post('/adicionar', carrinhoControllers.adicionar)
    .get('/somar', carrinhoControllers.Somar)
module.exports = router;