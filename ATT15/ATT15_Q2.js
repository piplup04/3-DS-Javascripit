// Questão 2
let contador = 0;
const intervalo = setInterval(() => {
 console.log("Contador:", ++contador);
 if (contador === 10) clearInterval(intervalo);
}, 1000);