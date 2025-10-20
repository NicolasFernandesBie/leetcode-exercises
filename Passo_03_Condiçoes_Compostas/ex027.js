// Crie um programa que leia duas notas de um aluno e calcule a sua média,
// mostrando uma mensagem no final, de acordo com a média atingida:
//  - Média até 4.9: REPROVADO
//  - Média entre 5.0 e 6.9: RECUPERAÇÃO
//  - Média 7.0 ou superior: APROVADO

const prompt = require('prompt-sync')()

const primeiraNota = Number(prompt('Digite a sua primeira nota : '))
const segundaNota = Number(prompt('Digite a sua segunda nota : '))

let mediaNotas = (primeiraNota + segundaNota) / 2

if (mediaNotas >= 7) {
  console.log('Voce foi aprovado ')
} else if (mediaNotas >= 5) {
  console.log('Voce esta de recuperacao')
} else {
  console.log('Voce esta reprovado ')
}
