//  Faça um programa que leia a largura e o comprimento de um terreno
// retangular, calculando e mostrando a sua área em m². O programa também
// devemostrar a classificação desse terreno, de acordo com a lista abaixo:
//  - Abaixo de 100m² = TERRENO POPULAR
//  - Entre 100m² e 500m² = TERRENO MASTER
//  - Acima de 500m² = TERRENO VIP

const prompt = require('prompt-sync')()

const comprimento = Number(prompt('Digite o comprimento do terreno'))
const largura = Number(prompt('Digite o largura do terreno'))

const areaTerreno = largura * comprimento

if (areaTerreno < 100) {
  console.log(`Terreno popular com ${areaTerreno} metros quadrados`)
} else if (areaTerreno >= 100 && areaTerreno <= 500) {
  console.log(`Terreno vip com ${areaTerreno} metros quadrados`)
} else {
  console.log(`Terreno master com ${areaTerreno} metros quadrados`)
}
