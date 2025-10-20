// Uma empresa precisa reajustar o salário dos seus funcionários, dando um
// aumento de acordo com alguns fatores. Faça um programa que leia o salário atual,
// o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa.
// No final, mostre o seu novo salário, baseado na tabela a seguir:
// - Mulheres
//  - menos de 15 anos de empresa: +5%
//  - de 15 até 20 anos de empresa: +12%
//  - mais de 20 anos de empresa: +23%
// - Homens
//  - menos de 20 anos de empresa: +3%
//  - de 20 até 30 anos de empresa: +13%
//  - mais de 30 anos de empresa: +25%

const prompt = require("prompt-sync")()
let genero = prompt("Você se identifica com homem ou mulher: ")
let tempo = Number(prompt("Quantos anos voce trabalha na empresa? "))
let salario = Number(prompt("Qual o seu salario atual? "))
let mulher = ""
let homem = ""

if (genero == "mulher" && tempo < 15) {
    let salarioReajustado = salario + (salario * 0.05)
    console.log(`Seu novo salario com o reajuste é ${salarioReajustado} `)
} else if (genero == "mulher" && tempo >= 15 && tempo < 20) {
    let salarioReajustado = salario + (salario * 0.12)
    console.log(`Seu novo salario com o reajuste é ${salarioReajustado} `)
} else if (genero == "mulher" && tempo >= 20) {
    let salarioReajustado = salario + (salario * 0.23)
    console.log(`Seu novo salario com o reajuste é ${salarioReajustado} `)
} else if (genero == "homem" && tempo < 15) {
    let salarioReajustado = salario + (salario * 0.03)
    console.log(`Seu novo salario com o reajuste é ${salarioReajustado} `)
} else if (genero == "homem" && tempo >= 15 && tempo < 20) {
    let salarioReajustado = salario + (salario * 0.13)
    console.log(`Seu novo salario com o reajuste é ${salarioReajustado} `)
} else if (genero == "homem" && tempo >= 20) {
    let salarioReajustado = salario + (salario * 0.25)
    console.log(`Seu novo salario com o reajuste é ${salarioReajustado} `)
}