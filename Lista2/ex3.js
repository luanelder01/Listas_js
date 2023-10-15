function calculoIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
  }
  
  function classificarIMC(imc) {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
      return "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
      return "Acima do peso";
    } else if (imc >= 30 && imc <= 34.9) {
      return "Obesidade grau 1";
    } else if (imc >= 35 && imc <= 39.9) {
      return "Obesidade tipo 2";
    } else {
      return "Obesidade tipo 3";
    }
  }
     const peso = 63;
    const altura = 1.74;
  
  const imc = calculoIMC(peso, altura);
  const classificacao = classificarIMC(imc);
  
  console.log(`Seu IMC é: ${imc.toFixed(2)}`);
  console.log(`Classificação: ${classificacao}`);
  