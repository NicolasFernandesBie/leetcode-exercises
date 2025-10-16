// Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boasvindas para ela:
// Ex:
// Qual é o seu nome? João da Silva
// Olá João da Silva, é um prazer te conhecer!

let prompt = require('prompt-sync')()
let nome = prompt("Qual o seu nome?")
console.log(`Ola ${nome} , é um prazer te conhecer!`)