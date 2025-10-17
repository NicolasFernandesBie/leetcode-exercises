// [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um
// fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
// já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
// quantos dias de vida um fumante perderá e exiba o total em dias.

const prompt = require('prompt-sync')()

let cigarros = Number(prompt('Quantos cigarros fuma ao dia? '))
let anos = Number(prompt('Quantos anos voce fuma? '))
let minutosdecigarrodia = cigarros * 10

let anosemminutos = anos * 365

let minutosdecigarro = minutosdecigarrodia * anosemminutos

let diasperdidos = minutosdecigarro / 1440

console.log(`A quantidade de dias perdidos sao ${diasperdidos}`)
