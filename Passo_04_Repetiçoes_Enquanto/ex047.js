// Desenvolva um aplicativo que mostre na tela o resultado da expressão 500 +
// 450 + 400 + 350 + 300 + ... + 50 + 0

const prompt = require("prompt-sync")()

let number = 500
let result = 0

while (number >= 0) {
    result = result + number
    number = number - 50

}
console.log(result)