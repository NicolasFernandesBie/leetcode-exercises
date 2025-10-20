// Crie um programa que leia o tamanho de três segmentos de reta.
// Analise seus comprimentos e diga se é possível formar um triângulo com essas
// retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento
// de cada lado deve ser menor que a soma dos outros dois.

// ) [DESAFIO] Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo
// de triângulo será formado:
//  - EQUILÁTERO: todos os lados iguais
//  - ISÓSCELES: dois lados iguais
//  - ESCALENO: todos os lados diferentes

const prompt = require('prompt-sync')()

let a = Number(prompt('Digite o lado A do triangulo: '))
let b = Number(prompt('Digite o lado b do triangulo: '))
let c = Number(prompt('Digite o lado c do triangulo: '))
const condicaoUm = a < b + c && b < a + c && c < b + a

if (condicaoUm && a === b && b === c) {
  console.log(`é possivel formar um triangulo equilatero com essas retas`)
} else if (condicaoUm && a != b && b != c) {
  console.log('é possivel formar o triangulo escaleno')
} else if (condicaoUm === false) {
  console.log('Nao e possivel formar um triangulo ')
} else {
  console.log('é possivel formar o triangulo isoseles')
}
