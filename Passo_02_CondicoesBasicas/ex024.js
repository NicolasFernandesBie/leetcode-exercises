// Faça um algoritmo que pergunte a distância que um passageiro deseja
// percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
// viagens até 200Km e R$0.45 para viagens mais longas.

const prompt = require("prompt-sync")()
let km = Number(prompt("Digite a quantidade de km "))

if (km > 200) {
    let valormaior = km * 0.50
    console.log(`O valor gasto referente a viagem foi ${valormaior} reais`)
} else {
    let valormenor = km * 0.45
    console.log(`O valor gasto referente a viagem foi ${valormenor} reais`)
}