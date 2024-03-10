const express = require('express')
const app = express();
app.use(express.json());
const path = require('path')
const prompt = require('prompt-sync')()
/* const verif = require('./cliente/login/login')

verif.login().valueOf */

const x = parseInt(prompt('valor: '))

switch(x){
    case 1:
        app.get('/', function(req, res){
            const diretorio = {
                root: path.join(__dirname)
            };
        
            const arquivo = './cliente/pageUm.html';
        
            res.sendFile(arquivo, diretorio)
        })
    break

    case 2:
        app.get('/', function(req, res){
            const diretorio = {
                root: path.join(__dirname)
            };
        
            const arquivo = './cliente/pageDois.html';
        
            res.sendFile(arquivo, diretorio)
        })
    break
    
    case 3:
        app.get('/', function(req, res){
            const diretorio = {
                root: path.join(__dirname)
            };
        
            const arquivo = './cliente/pageTres.html';
        
            res.sendFile(arquivo, diretorio)
        })
    break

    case 4:
        app.get('/', function(req, res){
            const diretorio = {
                root: path.join(__dirname)
            };
        
            const arquivo = './cliente/pageQuatro.html';
        
            res.sendFile(arquivo, diretorio)
        })
    break

    default:
        app.get('/', function(req, res){
            res.send('not found')
        })
}

app.listen(5421, () => {
    console.log('rodando..')
})

/* index (tema livre) - dupla
4 páginas para redirecionar
Autenticação logo ao entrar na index (utilizar modulo)
Utilizar laço switch case com rotas utilizando express */
