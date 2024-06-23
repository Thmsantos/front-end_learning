function carrinho(){
let fotos = [
    `<img src="./images/0.png">`,
    `<img src="./images/1.png">`,
    `<img src="./images/2.png">`,
    `<img src="./images/3.png">`,
    `<img src="./images/4.png">`,
    `<img src="./images/5.png">`,
    `<img src="./images/6.png">`,
    `<img src="./images/7.png">`,
    `<img src="./images/8.png">`
]
let i = 0;

function mostrar_carrinho(){
    i++
    document.getElementById('numero').innerHTML = fotos[i];

    if (i >= fotos.length) {
        i = 0;
      }
}

setInterval(mostrar_carrinho, 2000);
}

let dados = [
    {"id": 0, "nome": 'c++', "valor": 10.00},
    {"id": 1, "nome": 'git', "valor": 20.00},
    {"id": 2, "nome": 'html', "valor": 15.00},
    {"id": 3, "nome": 'java', "valor": 13.00},
    {"id": 4, "nome": 'javascript', "valor": 22.00},
    {"id": 5, "nome": 'mysql', "valor": 30.00},
    {"id": 6, "nome": 'python', "valor": 15.00},
    {"id": 7, "nome": 'react', "valor": 16.00},
    {"id": 8, "nome": 'typescript', "valor": 10.00},
]

