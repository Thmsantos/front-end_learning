function carrinho(){

    var array_carrinho = JSON.parse(localStorage.getItem("cursos"))
    
    lista = [0]
    valor = 0.00

    for(z = 1; z < array_carrinho.length; z++){
        lista.push(array_carrinho[z].id)
        valor = valor + array_carrinho[z].valor
    }

    document.getElementById('valor').innerHTML = valor

    let fotos = [
        `<img src="../images/carrinho_icon.png">`,
        `<img src="../images/1.png">`,
        `<img src="../images/2.png">`,
        `<img src="../images/3.png">`,
        `<img src="../images/4.png">`,
        `<img src="../images/5.png">`,
        `<img src="../images/6.png">`,
        `<img src="../images/7.png">`,
        `<img src="../images/8.png">`,
        `<img src="../images/9.png">`
    ]
    let i = 0;

    function mostrar_carrinho(){
        i++
        document.getElementById('conteudo').innerHTML = fotos[lista[i]];

        if (i > (lista.length - 2)) {
            i = 0;
        }
    }

    setInterval(mostrar_carrinho, 2000);
}


