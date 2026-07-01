// Questão 1 e 2
const aluno = { nome: "João", idade: 17 , curso: "Desenvolvimento de Sistemas"};
const json = JSON.stringify(aluno);
console.log(json); // '{"nome":"João","idade":17,"curso":"Desenvolvimento de Sistemas"}'

// Questão 3
const texto = '{"nome":"Maria","idade":25,"trabalho":"Engenheira"}';
const obj = JSON.parse(texto);
console.log(obj.trabalho); // Engenheira

// Questão 4 (desafio)
const pedido = {
  produto: "Camisa",
  quantidade: 3,
  valor: 29.99
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(pedido)
})
  .then(res => res.json())
  .then(dados => console.log("Pedido enviado:", dados))
  .catch(erro => console.error("Erro ao enviar pedido:", erro));
