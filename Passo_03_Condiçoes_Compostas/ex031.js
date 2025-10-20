// [DESAFIO] Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)
const prompt = require('prompt-sync')()

console.log('Escolha uma opção:')
console.log('[1] Pedra')
console.log('[2] Papel')
console.log('[3] Tesoura')

let jogador = Number(prompt('Sua escolha: '))

let computador = Math.floor(Math.random() * 3) + 1

let opcoes = ['', 'Pedra', 'Papel', 'Tesoura']

console.log(`Você escolheu: ${opcoes[jogador]}`)
console.log(`Computador escolheu: ${opcoes[computador]}`)

if (jogador === computador) {
  console.log('Empate!')
} else if (
  (jogador === 1 && computador === 3) ||
  (jogador === 2 && computador === 1) ||
  (jogador === 3 && computador === 2)
) {
  console.log('Você venceu! ')
} else {
  console.log('Computador venceu! ')
}
