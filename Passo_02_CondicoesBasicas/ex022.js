// Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
// situação em relação ao alistamento militar.
//  - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
// alistamento.
//  - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
// alistamento.

const prompt = require("prompt-sync")()
let nascimento = Number(prompt("Digite o seu ano de nascimento: "))
let alistamento = (2025 - nascimento) - 18

if (alistamento >= 1) {
    console.log(`Se passaram ${alistamento} anos do alistamento `)
} else {
    console.log(`Ainda faltam ${alistamento}anos para se alistar`)
}