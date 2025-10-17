// Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
// média e mostre na tela. No final, analise a média e mostre se o aluno teve ou
// não um bom aproveitamento (se ficou acima da média 7.0).

const prompt = require('prompt-sync')()

const nome = prompt('informe seu nome: ')
const nota1 = Number(prompt('Digite a sua nota 1: '))
const nota2 = Number(prompt('Digite a sua nota 2: '))

const media = (nota1 + nota2) / 2

if (media >= 7) {
  console.log(
    `Parabens ${nome}, voce foi aprovado e teve um bom aproveitamento , sua media foi de ${media}`
  )
} else {
  console.log(`Lamento ${nome} ,voce foi reprovado e sua media foi de ${media}`)
}
