// Questão 1
const promessa = new Promise((resolve, reject) => {
 setTimeout(() => resolve("Concluído"), 3000);
});

// Questão 2
promessa.then(res => console.log(res));

new Promise((resolve, reject) => {
 setTimeout(() => reject("Erro!"), 1000);
}).catch(err => console.error(err));

// Questão 3
function esperar(ms) {
 return new Promise(resolve => setTimeout(resolve, ms));
}
async function executar() {
 console.log("Início");
 await esperar(3000);
 console.log("Fim após 3 segundos");
}
executar();

// Questão 4 (desafio)
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function carregarDados() {
  try {
    await esperar(2000);

    const dados = { nome: "João", idade: 30 };

    if (!dados) {
      throw new Error("Dados inválidos");
    }

    console.log("Dados carregados:", dados);
  } catch (erro) {
    console.error("Erro ao carregar os dados:", erro.message);
  }
}

carregarDados();