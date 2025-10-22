// Faça um algoritmo que pergunte ao usuário um número inteiro e positivo
// qualquer e mostre uma contagem até esse valor:
// Ex: Digite um valor: 35
// Contagem: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!

const prompt = require("prompt-sync")()

let numberUsuario = Number(prompt('Digite um numero inteiro : '))
let numeroInicial = 1

while (numeroInicial <= numberUsuario) {
    console.log(numeroInicial)
    numeroInicial = numeroInicial + 1
}

console.log("Acabou")