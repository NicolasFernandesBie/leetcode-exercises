// Crie um programa que leia o nome e o salário de um funcionário, mostrando no final uma mensagem.
// Ex:
// Nome do Funcionário: Maria do Carmo
// Salário: 1850,45
// O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.

const prompt = require('prompt-sync')()
const nome = prompt("Nome do Funcionário: ")
const salario = parseFloat(prompt("Salário: ").replace(',', '.'))
console.log(`O funcionário ${nome} tem um salário de R$${salario.toFixed(2).replace('.', ',')} em Dezembro.`)