//Questão 1
let idade = 17;
if (idade >= 16) {
 console.log("Você é um cidadão apto a votar");
} else {
 console.log("Infelizmente você ainda não pode votar");
}

//Questão 2
let dia_da_semana = 'Sábado';
switch (dia_da_semana) {
 case 'Domingo': console.log('Domingo: dia de resenhar'); break;
 case 'Segunda-Feira': console.log('Segunda-Feira: dia de branco'); break;
 case 'Terça-Feira': console.log('Terça-feira: dia de nada legal'); break;
 case 'Quarta-Feira': console.log('Quarta-Feira: hoje é quarta feira meus bacanos'); break;
 case 'Quinta-Feira': console.log('Quinta-Feira: hoje é quinta-feira amanhã é sexta'); break;
 case 'Sexta-Feira': console.log('Sexta-Feira: SEXTOU'); break;
 case 'Sábado': console.log('Sábado: dia de aproveitar a folga(se você não trabalhar 6x1)'); break;
 default: console.log('Deve ser feriado ou sei lá');
}

