function VetorFiltro(vetor) {
    const numeros = vetor.filter(numero => numero > 0);
    return numeros;
  }
  
  // Exemplo de uso:
  const vetorOriginal = [-10, 20, -30, 40, -50, 60];
  const vetorPositivo = VetorFiltro(vetorOriginal);
  console.log(vetorPositivo);