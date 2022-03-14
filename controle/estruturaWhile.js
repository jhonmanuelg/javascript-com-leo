//estrutura While é uma das Estruturas de Repetição que podemos utilizar para replicar um bloco de código e, consequentemente, eliminar duplicação. Se a condição declarada no while for verdadeira, o programa executará o código de dentro 

function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0;

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opçao escolhida foi ${opcao}.`  )
} while (opcao != -1)

console.log('Ate a Proxima!')