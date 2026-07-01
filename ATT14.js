// Questão 1 
const numeros = [1, 2, 3];
const quadrados = numeros.map(n => n * n);
console.log(quadrados); // [1, 4, 9]

// Questão 2
const nomes = ['João', 'Fernanda', 'Carlos', 'Eva'];
const nomes5letra = nomes.filter(nome => nome.length >= 5).map(n => n.toUpperCase());
console.log(nomes5letra); // ["FERNANDA", "CARLOS"]

// Questão 3
const precos = [10.5, 22.3, 18.4];
const soma = precos.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(soma); // 51.2

// Questão 4 (Desafio)
const carrinho = [
 { nome: 'Camiseta', preco: 29.99 },
 { nome: 'Calça', preco: 89.9 },
 { nome: 'Meias', preco: 9.99 }
];

const total = carrinho.reduce((acumulador, item) => acumulador + item.preco, 0);
console.log(total); // 129.88
