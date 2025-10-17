//  A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
// um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
// quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
// sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.

const prompt = require('prompt-sync')()

let km = Number(prompt('Digite quantos km o carro percorreu '))
let dias = Number(prompt('Digite quantos dias esta com o carro '))

let valorkm = km * 0.2
let valordias = dias * 90
Number(valorkm.toFixed(2))
Number(valordias.toFixed(2))

console.log(
  `O valor referente aos km foi ${valorkm} reais , o valor dos dias foram ${valordias} reais e o valor total ficou ${
    valordias + valorkm
  } reais`
)
