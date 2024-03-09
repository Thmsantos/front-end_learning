function pag_cadastro(){
    let data = [
        {"usuario":"dom","senha":2222 },
        {"usuario":"zeze","senha":2222 },
        {"usuario":"muquinha","senha":2222 }
    ]

    let data_add = JSON.stringify(data)
    localStorage.setItem("tudo", data_add)

    window.location.href = '../cadastro/cadastro.html'

    return data;
   
    
}

function pag_login(){
    window.location.href = '../login/login.html'
}