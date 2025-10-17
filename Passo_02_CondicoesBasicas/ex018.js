// Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
// dela e depois mostre se ela pode ou não votar.

const prompt = require('prompt-sync')()

const ano = Number(prompt('Digite seu ano de nacimento: '))

const idade = 2025 - ano

if (idade >= 18) {
  console.log('Voce é maior de idade e pode votar')
} else {
  console.log('Voce é menor de idade e nao pode votar')
}
