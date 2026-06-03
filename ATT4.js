//Questão 1
for (let i = 1; i <= 10; i++) {
 console.log("Número:", i);
}

//Questão 2
let numero = 1;
let soma = 0;
while (numero <= 5) {
    soma += numero;
    numero++;
}
console.log("Soma =", soma);

//Questão 3
let senha = "1111";

do {
    console.log("Tentando senha...");
    senha = "1234"; 
} while (senha !== "1234");

console.log("Senha correta!");