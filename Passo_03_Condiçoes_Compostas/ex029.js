// Desenvolva um programa que leia o nome de um funcionário, seu salário,
// quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de
// acordo com a tabela a seguir:
//  - Até 3 anos de empresa: aumento de 3%
//  - entre 3 e 10 anos: aumento de 12.5%
//  - 10 anos ou mais: aumento de 20%

const prompt = require('prompt-sync')()

const nome = prompt('Qual o nome do funcionario ? ')
let salario = Number(prompt('Qual o seu salario? '))
let tempoEmpresa = Number(prompt('Quantos anos esta na empresa? '))

if (tempoEmpresa < 3) {
  let salarioJunior = salario * 0.03 + salario
  console.log(`Seu novo salario é ${salarioJunior}`)
} else if (tempoEmpresa >= 3 && tempoEmpresa < 10) {
  let salarioPleno = salario * 0.125 + salario
  console.log(`Seu novo salario é ${salarioPleno}`)
} else {
  let salarioSenior = salario * 0.2 + salario
  console.log(`Seu novo salario é ${salarioSenior}`)
}
