// Faça um algoritmo que leia a largura e altura de uma parede, calcule e
// mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
// sabendo que cada litro de tinta pinta uma área de 2metros quadrados.

const prompt = require('prompt-sync')()

const altura = Number(
  prompt('Digite quantos metros tem a altura da sua parede ')
)
const largura = Number(
  prompt('Digite quantos metros tem a largura da sua parede ')
)
let area = altura * largura

let tinta = area / 2
tinta = tinta.toFixed(0)

console.log(
  `A area da sua parede é ${area} metros quadrados, e voce vai precisar de aproximadamente ${tinta} litros de tinta`
)
