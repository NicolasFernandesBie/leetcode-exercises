// Crie um algoritmo que leia o valor inicial da contagem, o valor final e o
// incremento, mostrando em seguida todos os valores no intervalo:
// Ex: Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!
// O programa acima vai ter um problema quando digitarmos o primeiro valor
// maior que o último. Resolva esse problema com um código que funcione em qualquer
// situação.

const prompt = require("prompt-sync")()

let maiorNumero = Number(prompt("Digite o maior numero: "))
let menorNumero = Number(prompt("Digite o menor numero: "))
let incremento = Number(prompt("Digite o incremento: "))

if (maiorNumero > menorNumero) {
    while (menorNumero < maiorNumero) {
        console.log(menorNumero)
        menorNumero = menorNumero + incremento
    }
} else {
    console.log("O maior numero selecionado foi menor que o menos numero selecionado, tente novamente.")
}