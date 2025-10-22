// Faça um programa que leia 7 números inteiros e no final mostre o somatório
// entre eles.

const prompt = require("prompt-sync")()

let numeroMax = 7
let contador = 1
let numeronovo = 0

while (contador <= numeroMax) {
    let numero = Number(prompt(`Digite o seu numero que deseja somar: `))


    numeronovo = numeronovo + numero
    contador++
    console.log(numeronovo)
}




