// Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
// 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
// o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.

const prompt = require('prompt-sync')()

const velocidade = Number(prompt('Digite a velocidade que estava seu carro: '))

if (velocidade > 80) {
  const multa = (velocidade - 80) * 5
  console.log(
    `Voce estava acima da velocidade e foi umltado em ${multa},00 refente a 5 reais por km ultrapassado`
  )
} else {
  console.log(`voce estava dentro do limite de velocidade `)
}
