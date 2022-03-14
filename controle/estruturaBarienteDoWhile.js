// Estrutura Bariente Do While O do/while tem quase o mesmo funcionamento que o while, a diferença é que com o uso dele teremos os comandos executados ao menos uma única vez.


function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = -1;

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opçao escolhida foi ${opcao}.`  )
} while (opcao != -1)

console.log('Ate a Proxima!')