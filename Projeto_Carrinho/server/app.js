const express = require('express');
let cors = require('cors');
const rotas = require('./src/routes/index')
const app = express();
app.use(cors());
app.use(express.json());

app.use('/learn', rotas)

const porta = 4000;

app.listen(porta, () => {
    console.log('rodando...')
})