// Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a
// sua terça parte.
// Ex:
// Digite um número: 3.5
// O dobro de 3.5 é 7.0
// A terça parte de 3.5 é 1.16666

const prompt = require('prompt-sync')()

const number = Number(
  prompt(
    'Digite um numero para que seja calculado o seu dobro e sua terca parte'
  )
)

const dobro = number * 2
const terca = number / 3

console.log(`Ò dobro do seu numero é ${dobro}, a sua terca parte é ${terca}`)
