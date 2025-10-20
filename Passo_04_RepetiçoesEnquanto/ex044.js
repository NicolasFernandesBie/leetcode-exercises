// Crie um algoritmo que leia o valor inicial da contagem, o valor final e o
// incremento, mostrando em seguida todos os valores no intervalo:
// Ex: Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!

const prompt = require("prompt-sync")()

let primeiroValor = Number(prompt("Digite o primeiro numero da sequencia: "))
let ultimoValor = Number(prompt("Digite o ultimo numero da sequencia: "))
let incremento = Number(prompt("Digite o valor do incremento da sequencia: "))

while (primeiroValor < ultimoValor) {
    console.log(primeiroValor)
    primeiroValor = primeiroValor + incremento
}

console.log("Acabou")