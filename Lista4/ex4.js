function filtrar(vetorNomes, letra) {
    const nomesFiltrados = vetorNomes.filter(nome => nome.includes(letra));
    return nomesFiltrados;
  }
 const nomes = [  'Maria', 'José', 'Paula', 'Felipe', 'Mariana', 'Ricardo', 'Isabela',  'Gustavo',  'Camila', 'Eduardo' ];
   const letra = 'M';
  const nomesComLetraM = filtrar(nomes, letra);
  console.log(nomesComLetraM);
  