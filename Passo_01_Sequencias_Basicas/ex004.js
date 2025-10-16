// Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório
// entre eles.
// Ex:
// Digite um valor: 8
// Digite outro valor: 5
// A soma entre 8 e 5 é igual a 13.

const prompt = require("prompt-sync")()

const number1 = Number(prompt("Digite o primeiro numero que deseja somar"))
const number2 = Number(prompt("Digite o segundo numero que deseja somar"))
const soma = number1 + number2
console.log(`A soma do algorismo ${number1} + ${number2}  é igual a ${soma}`)