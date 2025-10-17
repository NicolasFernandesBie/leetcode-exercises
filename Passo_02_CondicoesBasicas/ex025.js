//  [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta.
// Analise seus comprimentos e diga se é possível formar um triângulo com essas
// retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento
// de cada lado deve ser menor que a soma dos outros dois.

const prompt = require("prompt-sync")()

let a = Number(prompt("Digite o lado A do triangulo: "))
let b = Number(prompt("Digite o lado b do triangulo: "))
let c = Number(prompt("Digite o lado c do triangulo: "))

if (a < b + c && b < a + c && c < b + a) {
    console.log(`é possivel formar um triangulo com essas retas`)
} else {
    console.log("Nao é possivel formar o triangulo")
}