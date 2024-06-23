function cadastrar(){
    var array = JSON.parse(localStorage.getItem("tudo"))
    let user = document.querySelector("#login").value
    let senha = document.querySelector("#senha").value
    let user_formated = user.toLowerCase()
    let x = 0

    for(i = 0; i < array.length; i++){
        if(array[i].usuario == user_formated){
            alert('usuario já cadastrado')
            x = 1
        }
    }
    
    if(x == 0){
        let row = {"usuario": user_formated, "senha": senha}
        array.push(row)
        localStorage.setItem("tudo", JSON.stringify(array))
        alert("Usuario adicionado.")
    }
}

function voltar(){
    window.location.href = "../pag_inicial/PrimeiraPagina.html"
}