// Desenvolva um programa que leia uma distância em metros e mostre os valores
// relativos em outras medidas.
// Ex:
// Digite uma distância em metros: 185.72
// A distância de 85.7m corresponde a:
// 0.18572Km
// 1.8572Hm
// 18.572Dam
// 1857.2dm
// 18572.0cm
// 185720.0mm

const prompt = require('prompt-sync')()

const metros = Number(prompt('Digite a distancia em metros '))

const dam = metros / 10
const hm = dam / 10
const km = hm / 10

const dm = metros * 10
const cm = dm * 10
const mm = cm * 10

console.log(
  `A sua distancia em mm é ${mm}, em cm é ${cm}, em dm é ${dm}, em metros é ${metros}, em dam é ${dam}, em hm é ${hm}, e por fim em km é ${km}`
)
