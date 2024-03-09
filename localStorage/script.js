function cadastrar() {
    var dados_array = JSON.parse(localStorage.getItem("registro"))

    let login = document.querySelector("#login").value
    let senha = document.querySelector("#senha").value

    let user = {nome: login, senha: senha }

    dados_array.push(user)
    localStorage.setItem("registro", JSON.stringify(dados_array))
    
}

function login(){  
    const array_dados = JSON.parse(localStorage.getItem("registro"))

    let login = document.querySelector("#login").value
    let senha = document.querySelector("#senha").value
  
  for (let i = 0; array_dados.length > i; i++) {
    if (array_dados[i] == null) {
       alert("processando")
    } 
    else{
      if (login == array_dados[i].nome && senha == array_dados[i].senha) {
        document.location.href= 'paginaLivre.html'
      } 
    } 
   }
  } 