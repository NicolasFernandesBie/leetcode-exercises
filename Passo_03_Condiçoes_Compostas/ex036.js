// Um programa de vida saudável quer dar pontos atividades físicas que podem
// ser trocados por dinheiro. O sistema funciona assim:
//  - Cada hora de atividade física no mês vale pontos
//  - até 10h de atividade no mês: ganha 2 pontos por hora
//  - de 10h até 20h de atividade no mês: ganha 5 pontos por hora
//  - acima de 20h de atividade no mês: ganha 10 pontos por hora
//  - A cada ponto ganho, o cliente fatura R$0,05 (5 cent

const prompt = require('prompt-sync')()

let horas = Number(
  prompt('Digite quantas horas de atividade fisica praticou esse mes? ')
)
let ponto1 = horas * 2
let ponto2 = horas * 5
let ponto3 = horas * 10

if (horas < 10) {
  let result1 = ponto1 * 0.05
  console.log(`Seus ${ponto1} podem ser trocados por ${result1}reais `)
} else if (horas >= 10 && horas < 20) {
  let result1 = ponto2 * 0.05
  console.log(`Seus ${ponto2} podem ser trocados por ${result1} reais`)
} else {
  let result1 = ponto3 * 0.05
  console.log(`Seus ${ponto3} podem ser trocados por ${result1} reais`)
}
