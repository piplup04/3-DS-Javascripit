// Questão 4 (desafio)
let marcador = 0;
let segundos = 0;
const cronometro = setInterval(() => {
 segundos++;

 if (segundos === 60) {
  segundos = 0;
 }

 console.log("minutos:", Math.floor(marcador / 60), "segundos:", segundos);

 marcador++;

 if (marcador === 90) clearInterval(cronometro);
}, 1000);
