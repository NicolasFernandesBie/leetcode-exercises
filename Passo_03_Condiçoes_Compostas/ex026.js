// Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando
// na tela uma das mensagens abaixo:
//  - O primeiro valor é o maior
//  - O segundo valor é o maior
//  - Não existe valor maior, os dois são iguais

const prompt = require("prompt-sync")()

const numero1 = Number(prompt("Insira um numero : "))
const numero2 = Number(prompt("Insira outro numero : "))

if (numero1 > numero2) {
    console.log(`o primeiro numerto é maior`)
} else if (numero2 > numero1) {
    console.log(`O segundo numero é maior`)
} else {
    console.log(`Os numeros são iguais`)

}