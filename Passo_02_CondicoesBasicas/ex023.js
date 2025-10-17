// Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos
// para todos, mas especialmente para mulheres. Faça um programa que leia nome,
// sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo
// que:
//  - Homens ganham 5% de desconto
//  - Mulheres ganham 13% de desconto

const prompt = require("prompt-sync")()
let nome = prompt("Digite o seu nome: ")

let genero = prompt("O seu genero é Masculino ou Feminino? ")
let generouppercase = genero.toUpperCase(0)
let compra = Number(prompt("Digite o Valor da sua compra: "))
if (generouppercase == "Feminino") {
    let valorcomdesconto = compra - (compra * 0.13)
    console.log(`Ola ${nome} mulheres recebem 13% de desconsto nas suas compras, dessa forma sua compra de ${compra} reais vai sair por apenas ${valorcomdesconto} reais`)
} else {
    let valorcomdescontoM = compra - (compra * 0.05)
    console.log((`Ola ${nome} homens recebem 5% de desconsto nas suas compras, dessa forma sua compra de ${compra} reais vai sair por apenas ${valorcomdescontoM} reais`))
}

