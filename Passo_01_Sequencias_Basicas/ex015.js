// Crie um programa que leia o número de dias trabalhados em um mês e mostre o
// salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
// por hora trabalhada.

const prompt = require('prompt-sync')()

const diasmes = Number(prompt('Digite quantos dia trabalhou no mes '))
const horastrabalhadas = diasmes * 8

let salario = horastrabalhadas * 25

console.log(
  `Voce trabalhou ${diasmes} dias esse mes , totalizando ${horastrabalhadas} horas de trabalho, o seu salario referente é ${salario}`
)
