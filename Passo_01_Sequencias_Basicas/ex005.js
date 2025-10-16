//  Faça um programa que leia as duas notas de um aluno em uma matéria e mostre
// na tela a sua média na disciplina.
// Ex:
// Nota 1: 4.5
// Nota 2: 8.5
// A média entre 4.5 e 8.5 é igual a 6.5

const prompt = require("prompt-sync")()

const nota1 = Number(prompt("Digite a nota 1"))
const nota2 = Number(prompt("Digite a nota 2"))
const media = (nota1 + nota2) / 2

console.log(`A media das duas notas é ${media}`)