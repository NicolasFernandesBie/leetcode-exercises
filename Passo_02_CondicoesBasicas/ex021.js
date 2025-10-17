// Faça um algoritmo que leia um determinado ano e mostre se ele é ou não
// BISSEXTO.
const prompt = require('prompt-sync')()
const ano = Number(prompt('Digite quantos dias tem nesse ano : '))

if (ano % 2 === 0) {
  console.log(`O ano é bissexto`)
} else {
  console.log(`E um ano comum`)
}
