function entrar(){
    var array = JSON.parse(localStorage.getItem("tudo"))
    console.log(array)
    let login = document.querySelector("#login").value 
    let senha = document.querySelector("#senha").value
    let x = false

   for(i = 0; i < array.length; i ++){
        if(login == array[i].usuario && senha == array[i].senha){
            window.location.href = "../home/home.html"
            let dados = [
                {"id": 0, "curso":"dom","valor":2222 },
            ]
        
            let dados_add = JSON.stringify(dados)
            localStorage.setItem("cursos", dados_add)

            let tds_cursos = [
                {"id": 1, "nome": 'c++', "valor": 60.00},
                {"id": 2, "nome": 'css', "valor": 40.00},
                {"id": 3, "nome": 'html', "valor": 75.00},
                {"id": 4, "nome": 'java', "valor": 90.00},
                {"id": 5, "nome": 'javascript', "valor": 105.00},
                {"id": 6, "nome": 'Linux', "valor": 120.00},
                {"id": 7, "nome": 'mysql', "valor": 55.00},
                {"id": 8, "nome": 'php', "valor": 50.00},
                {"id": 9, "nome": 'python', "valor": 72.00},
            ]

            let tds_cursos_add = JSON.stringify(tds_cursos)
            localStorage.setItem("todos_cursos", tds_cursos_add)
            x = true 
            return dados;     
        }
   }

   if(x == false){
      alert('usuario ou senha não procedem!')
   } 
}

function voltar(){
    window.location.href = "../pag_inicial/PrimeiraPagina.html"
}