// Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O
// aluguel de um carro custa R$90 por dia para carro popular e R$150 por dia para
// carro de luxo. Além disso, o cliente paga por Km percorrido. Faça um programa
// que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e
// quantos Km foram percorridos. No final mostre o preço a ser pago de acordo com a
// tabela a seguir:
//  - Carros populares (aluguel de R$90 por dia)
//  - Até 100Km percorridos: R$0,20 por Km
//  - Acima de 100Km percorridos: R$0,10 por Km
//  - Carros de luxo (aluguel de R$150 por dia)
//  - Até 200Km percorridos: R$0,30 por Km
//  - Acima de 200Km percorridos: R$0,25 por Km

const prompt = require('prompt-sync')()

let tipoCarro = prompt(
  'Qual o tipo de carro deseja escolher, Luxo ou Popular? '
).toLowerCase()
const dias = Number(prompt('Quantos dias deseja ficar com o carro? '))
const km = Number(prompt('Quantos km vai rodar com o carro? '))

let total = 0

if (tipoCarro === 'popular') {
  if (km <= 100) {
    total = 90 * dias + km * 0.2
  } else {
    total = 90 * dias + km * 0.1
  }
} else if (tipoCarro === 'luxo') {
  if (km <= 200) {
    total = 150 * dias + km * 0.3
  } else {
    total = 150 * dias + km * 0.25
  }
} else {
  console.log('Tipo de carro inválido!')
}

console.log(`O valor total ficou R$${total.toFixed(2)}`)
