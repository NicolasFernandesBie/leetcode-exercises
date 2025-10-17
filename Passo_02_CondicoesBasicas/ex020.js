//  Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou
// ÍMPAR.
const prompt = require('prompt-sync')()

const numero = Number(prompt('Digite seu numero '))

if (numero % 2 === 0) {
  console.log('Par')
} else {
  console.log('Impar')
}
