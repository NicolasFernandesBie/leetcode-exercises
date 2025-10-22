// Crie um programa que leia 6 números inteiros e no final mostre quantos deles
// são pares e quantos são ímpares.

const prompt = require("prompt-sync")()

let numeroMax = 6
let contador = 1
let impares = 0
let pares = 0
let numero = 0

while (contador <= numeroMax) {
    numero = Number(prompt(`Digite o seu numero somar: `))
    contador++
    if (numero % 2 == 0) {
        pares++

    } else {
        impares++

    }
    console.log(`Quantidade de numeros pares ${pares}`)
    console.log(`Quantidade de numeros pares ${impares}`)



} 
