// Questão 1
// R: O escopo de função pode ser acessado apenas dentro da função onde foi declarado, enquanto o escopo de bloco pode ser acessado dentro do bloco onde foi declarado, como em loops ou condicionais.

// Questão 2
var x = 1;
function teste() {
 console.log(x);
 var x = 2;
 console.log(x);
}
teste();
// R: O resultado será "undefined" para o primeiro console.log, porque a variável "x" é declarada dentro da função e tem escopo local. O segundo console.log exibirá "2", pois a variável "x" foi atribuída o valor 2 dentro da função.

// Questão 3
function exemploLet() {
 if (true) {
 let nome = "Ana";
 console.log(nome);
 }  
}

exemploLet();

// Questão 4
for (var i = 0; i < 3; i++) {
 setTimeout(() => console.log(i), 100);
}
// R: O resultado será "3" impresso três vezes no console. Isso ocorre porque a variável "i" é declarada com "var", que tem escopo de função, e o valor de "i" é atualizado para 3 antes que os callbacks do setTimeout sejam executados. Para corrigir isso, seria necessário usar "let" em vez de "var" para declarar a variável "i".

for (let i = 0; i < 3; i++) {
 setTimeout(() => console.log(i), 100);
}