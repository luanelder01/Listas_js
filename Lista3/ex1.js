const vetor = [54, 21, 87, 33, 66, 12, 98, 45, 76, 10]

let maior = vetor[0];
let menor = vetor[0];

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > maior) {
        maior = vetor[i];
    }
    if (vetor[i] < menor) {
        menor = vetor[i];
    }
}
console.log("Menor", menor);
console.log("Maior", maior);

