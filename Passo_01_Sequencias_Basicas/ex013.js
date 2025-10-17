//  Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o
// seu novo salário, com 15% de aumento.

const prompt = require('prompt-sync')()

let salario = Number(prompt('Digite seu salario '))
let aumento = salario * 0.15
aumento = Number(aumento.toFixed(2))
let novosalario = salario + aumento

console.log(
  `Seu aumeto foi de ${aumento} reais e seu novo salario é ${novosalario}`
)
