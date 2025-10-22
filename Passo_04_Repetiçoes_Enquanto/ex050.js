// Desenvolva um programa que faça o sorteio de 20 números entre 0 e 10 e
// mostre na tela:
// a) Quais foram os números sorteados
// b) Quantos números estão acima de 5
// c) Quantos números são divisíveis por 3

let maiorCinco = 0
let divisiveisTres = 0
let contInicial = 0
console.log("A seguir vamos sortear 20 numeros :")

while (contInicial < 20) {
    let sorteio = Math.floor(Math.random() * 11)
    contInicial++
    console.log(sorteio)
    if (sorteio > 5) {
        maiorCinco++
    } if (sorteio % 3 == 0) {
        divisiveisTres++
    }

}
console.log(`Essa foi a quantidade de numeros maiores que 5: ${maiorCinco}
    Essa foi a quantidade de numeros divisiveis por 3 : ${divisiveisTres}`)
