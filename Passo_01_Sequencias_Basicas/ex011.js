// Desenvolva uma lógica que leia os valores de A, B e C de uma equação do
// segundo grau e mostre o valor de Delta

const prompt = require('prompt-sync')()

let a = Number(prompt('Digite o valor de A '))
let b = Number(prompt('Digite o valor de B '))
let c = Number(prompt('Digite o valor de C '))

let delta = b * b - 4 * a * c

console.log(`O valor do seu delta é ${delta}`)
