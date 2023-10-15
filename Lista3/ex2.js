const vetor = [54, 21, 87, 33, 66, 12, 98, 45, 76, 10];

let soma = 0;
let count = 0;

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 === 0) {
        soma += vetor[i];
        count++;
    }
}
const media = soma/count;
console.log("Média pares", media);