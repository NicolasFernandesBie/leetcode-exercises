// Escreva um programa para aprovar ou não o empréstimo bancário para a compra
// de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e
// em quantos anos ele vai pagar. Calcule o valor da prestação mensal, sabendo que
//  ela não pode exceder 30% do salário ou então o empréstimo será negado.

const prompt = require('prompt-sync')()

const salario = Number(prompt('Digite o seu salario atual: '))
const casa = Number(prompt('Digite o valor da casa que deseja comprar: '))
const tempo = Number(prompt('Digite em quantos anos deseja quitar a casa: '))

let numeroParcelas = tempo * 12
let valorDaParcela = casa / numeroParcelas

if (valorDaParcela < salario * 0.3) {
  console.log('Emprestimo aprovado, parabens pela sua aquisicao')
} else {
  console.log(
    'Emprestimo negado pois o valor da parcela ultrapassa a 30% do salario nesse numero de parcelas '
  )
}
