function adc_ao_carrinho(id_){
    var array_carrinho = JSON.parse(localStorage.getItem("cursos"))
    var array_tds_cursos = JSON.parse(localStorage.getItem("todos_cursos"))
    
    for(i = 0; i < array_tds_cursos.length; i++){
        if(id_ == array_tds_cursos[i].id){
            adc = {"id": id_, "cursos": array_tds_cursos[i].nome, "valor": array_tds_cursos[i].valor}
            console.log(adc)
        }
    }

    array_carrinho.push(adc)
    localStorage.setItem("cursos", JSON.stringify(array_carrinho))
    alert('adicionado ao carrinho')

}

function tela_carrinho(){
    window.location.href = "../carrinho/carrinho.html"
}