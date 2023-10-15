function grupoEleitoral(idade) {
    if (idade < 16) {
      return "Não é eleitor";
    } else if (idade >= 16 && idade < 18 || idade >= 65) {
      return "Eleitor facultativo";
    } else if (idade >= 18 && idade < 65) {
      return "Eleitor obrigatório";
    } else {
      return "Idade incorreta";
    }
  }

  const idade = 37;
const grupo = grupoEleitoral(idade);
console.log(grupo);