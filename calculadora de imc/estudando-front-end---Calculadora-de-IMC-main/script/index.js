const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');


    if (nome !== '' && altura !== '' && peso !== ''){

        const valorIMC = (peso / (altura * altura)).toFixed(2);

        resultado.textContent = valorIMC;
    }else {
        resultado.textContent = 'preencha todos os campos!!'
    }

}


calcular.addEventListener('click', imc)

