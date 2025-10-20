// O Índice de Massa Corpórea (IMC) é um valor calculado baseado na altura e no
// peso de uma pessoa. De acordo com o valor do IMC, podemos classificar o
// indivíduo dentro de certas faixas.
//  - abaixo de 18.5: Abaixo do peso
//  - entre 18.5 e 25: Peso ideal
//  - entre 25 e 30: Sobrepeso
//  - entre 30 e 40: Obesidade
//  - acima de 40: Obseidade mórbida
// Obs: O IMC é calculado pela expressão peso/altura² (peso dividido pelo quadrado
// da altura)

const prompt = require('prompt-sync')()

const altura = Number(prompt('Digite a sua altura em m : '))
const peso = Number(prompt('Digite o seu peso em kg: '))

const imc = peso / (altura * altura)

if (imc < 18.5) {
  console.log(`O seu imc é ${imc} e voce esta abaixo do peso ideal`)
} else if (imc >= 18.5 && imc < 25) {
  console.log(`O seu imc é ${imc} e voce esta no peso ideal`)
} else if (imc >= 25 && imc < 30) {
  console.log(`O seu imc é ${imc} e voce esta acima do peso ideal`)
} else {
  console.log(`O seu imc é ${imc} e voce esta obeso`)
}
