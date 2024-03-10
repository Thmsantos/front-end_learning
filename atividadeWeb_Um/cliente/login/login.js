function verificar(){
    let dados = [
        {'user': 'neymar', 'pass': 22},
        {'user': 'thiago', 'pass': 22},
        {'user': 'kaue', 'pass': 22},
        {'user': 'santos', 'pass': 22},
        {'user': 'jr', 'pass': 22}
    ]

    let usuario = document.querySelector("#user")
    let senha = document.querySelector("#pass")

    for(i = 0; i < dados.length; i++){
        if(usuario == dados[i].user && senha == dados[i].pass){
            console.log('foi')
        }
    }

    console.log('foib')
}

/* exports.login = () =>{
    return y
} */
