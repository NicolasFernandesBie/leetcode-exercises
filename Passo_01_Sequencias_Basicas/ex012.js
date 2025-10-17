// Crie um programa que leia o preço de um produto, calcule e mostre o seu
// PREÇO PROMOCIONAL, com 5% de desconto

const prompt = require('prompt-sync')()

let valorproduto = Number(prompt('Digite o valor do produto '))
let valorcomdesconto = valorproduto - valorproduto * 0.05

console.log(
  `O valor do produto é ${valorproduto}, o valor com 5% de desconto é ${valorcomdesconto}`
)
