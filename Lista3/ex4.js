function gerarNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const vetor = [];
const numeroscolocados = new Set();
let numerosNaoColocados = 0;

while (vetor.length < 50) {
    const numero = gerarNumero(1, 500);
    
    if (!numeroscolocados.has(numero)) {
        numeroscolocados.add(numero);
        vetor.push(numero);
    } else {
        numerosNaoColocados++;
    }
}


const numerosImpares = vetor.filter(numero => numero % 2 !== 0);

const somatorioImpares = numerosImpares.reduce((acc, numero) => acc + numero, 0);

console.log("Números no vetor:", vetor);
console.log("Número que a inserção deu errado no vetor:", numerosNaoColocados);
console.log("Números ímpares no vetor:", numerosImpares);
console.log("Somatório dos números ímpares:", somatorioImpares);
