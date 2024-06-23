function entrar(){
    var array = JSON.parse(localStorage.getItem("tudo"))
    console.log(array)
    let login = document.querySelector("#login").value 
    let senha = document.querySelector("#senha").value
    let x = false

   for(i = 0; i < array.length; i ++){
        if(login == array[i].usuario && senha == array[i].senha){
            window.location.href = "../home/home.html"     
            x = true 
        }
   }

   if(x == false){
      alert('usuario ou senha não procedem!')
   } 
}

function voltar(){
    window.location.href = "../pag_inicial/PrimeiraPagina.html"
}