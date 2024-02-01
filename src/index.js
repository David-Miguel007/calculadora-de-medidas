const initialValue = document.getElementById('initial-value')
const valueForMultiply = document.getElementById('multiplicator-value')
const finallyValue = document.querySelector('.result')
const dicaParaMelhora = document.querySelector('.dica')

addEventListener("keypress", function(event) {
    // Verifica se a tecla pressionada é Enter
    if (event.keyCode === 13) {
        // Chama a função quando Enter é pressionado
        values();
    }
});

function values() {
    const peso = parseFloat(initialValue.value);
    const altura = parseFloat(valueForMultiply.value);

    if (peso > 0 && altura > 0) {
        const multipling = altura * altura;
        const dividindo = (peso / multipling).toFixed(2);

        finallyValue.innerHTML = `<h2 class="finally-value"> O seu índice de massa corporal é: ${dividindo}</h2>`;

        if (dividindo >= 35 && dividindo <= 40) {
            dicaParaMelhora.innerHTML = '<h3 class="classification">A sua classificação é obesidade grau II, procure um nutricionista !!!</h3>';
        }
        if (dividindo >= 30 && dividindo <= 34.99) {
            dicaParaMelhora.innerHTML = '<h3 class="classification">A sua classificação é obesidade grau I, procure um nutricionista !!!</h3>';
        }
        if (dividindo >= 25 && dividindo <= 29.99) {
            dicaParaMelhora.innerHTML = '<h3 class="classification">A sua classificação é acima do peso, procure um nutricionista !!!</h3>';
        }
        if (dividindo >= 18.5 && dividindo <= 24.99) {
            dicaParaMelhora.innerHTML = '<h3 class="classification">Parabens, você está na classificação de peso normal !!!</h3>';
        }
        if (dividindo >= 17 && dividindo <= 18.49) {
            dicaParaMelhora.innerHTML = '<h3 class="classification">A sua classificação é abaixo do peso, procure um nutricionista !!!</h3>';
        }
        if (dividindo <= 16.99) {
            dicaParaMelhora.innerHTML = '<h3 class="classification">A sua classificação é muito abaixo do peso, procure um nutricionista !!!</h3>';
        }
        if (dividindo >= 40) {
            dicaParaMelhora.innerHTML = '<h3 class="classification">A sua classificação é obesidade grau III, procure um nutricionista !!!</h3>';
        }


    }
}