//  [DESAFIO] Crie um jogo onde o computador vai sortear um número entre 1 e 5 o
// jogador vai tentar descobrir qual foi o valor sorteado.

const prompt = require('prompt-sync')()

const numeroJogador = Number(
  prompt(
    'Jogo de adivinhacao, tente acertar o numero de 1 a 5 sorteado pela maquina, qual o seu palpite? '
  )
)

let sorteioMaquina = Number(Math.floor(Math.random() * 5) + 1)

if (numeroJogador === sorteioMaquina) {
  console.log('Parabens voce acertou')
} else {
  console.log(`Voce errodu, a maquina sorteou ${sorteioMaquina}`)
}
