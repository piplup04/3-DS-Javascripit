// Questão 3
let intervaloId = null;

function iniciarIntervalo() {
  if (intervaloId !== null) return;

  intervaloId = setInterval(() => {
    console.log("Intervalo rodando...");
  }, 1000);
}

function pararIntervalo() {
  if (intervaloId !== null) {
    clearInterval(intervaloId);
    intervaloId = null;
  }
}

iniciarIntervalo();
setTimeout(pararIntervalo, 5000);
