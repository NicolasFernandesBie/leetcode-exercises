// Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
// e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.

const prompt = require('prompt-sync')()

const real = Number(prompt('Digite quantos reais voce possui na sua carteira '))

let dolar = real / 3.45
dolar = dolar.toFixed(2).replace('.', ',', ',')

console.log(
  `Voce pode comprar com seu dinheiro em real aproximadamente ${dolar}dolares`
)
