
const calcular = document.getElementById('calcular');


function imc () {
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');

  if(nome !== '' && altura !== '' && peso !== '') {

    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificacao = '';

    if(valorIMC < 18.5){
      classificacao = "Abaixo do peso.";
    }

    else if (valorIMC < 25){
      classificacao = "Está com o peso ideal, parabéns!!!";
    }

    else if (valorIMC < 30){
      classificacao = "Levemente acima do peso.";
    }

    else if (valorIMC < 35){
      classificacao = "Você está com obesidade grau I"
    }

    else if (valorIMC < 40){
      classificacao = "Você está com obesidade grau II"
    }

    else{
      classificacao = "Você está com obesidade grau III. Cuidado!!!"
    }

    resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
  }

  else {
    resultado.textContent = "preencha todos os campos!!!";
  }

}

calcular.addEventListener('click', imc);