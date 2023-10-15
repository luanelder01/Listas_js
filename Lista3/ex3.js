const tempSemana = [22, 24, 20, 19, 23, 26, 27];

const somaTemp= tempSemana.reduce((acc, temperatura) => acc + temperatura, 0);
const mediaTemp = somaTemp / tempSemana.length;

let dias = 0;
for (let i = 0; i < tempSemana.length; i++) {
    if (tempSemana[i] > mediaTemp) {
        dias++;
    }
}

console.log("Temperaturas registradas", tempSemana);
console.log("Média", mediaTemp);
console.log("Acima da média", dias);