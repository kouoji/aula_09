//criar uma variável do tipo objeto
let pessoa = {
  nome: "Alessandro",
  sobrenome: "Silva",
  idade: 19,
  altura: 1.67,
  cargo: "aluno",
};

//consumindo o objeto todo
console.log(pessoa);
//consumindo uma das características do objeto
console.log(pessoa.altura);

let carro = {
  nome: "Brasilia",
  cor: "amarela",
  potencia: "54cv",
};

console.log(carro.nome + " " + carro.cor);

// * Array de objetos
let usuarios = [
  {
    nome: "Vandélio",
    cargo: "Operador de máquina",
    status: "ativo",
  },
  {
    nome: "Berenice",
    cargo: "Corretora de imoveis",
    status: "ativo",
  },
  {
    nome: "Ariovaldo",
    cargo: "Vendedor ambulante",
    status: "inativo",
  },
];

console.log(usuarios);

// * Acessando um objeto específico
console.log(usuarios[2]);
console.log(usuarios[2].nome);
console.log(usuarios[0].nome);
