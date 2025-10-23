// 51) Faça um aplicativo que leia o preço de 8 produtos. No final, mostre na tela
// qual foi o maior e qual foi o menor preço digitados.

const prompt = require('prompt-sync')()
let condicao = 0
let precos = []

let i = 1

while (condicao <= 7) {
  let precoDigitado = Number(prompt('Dgite um preco'))
  precos.push(precoDigitado)
  condicao++
  let maior = precos[0]
  let menor = precos[0]
}
while (i < precos.length) {
  if (precos[i] > maior) {
    maior = precos[i]
  }
  if (precos[i] < menor) {
    menor = precos[i]
  }
  i++
}

console.log('Maior preço:', maior)
console.log('Menor preço:', menor)
