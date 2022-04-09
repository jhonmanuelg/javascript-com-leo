/*

O método call() invoca uma função com um dado valor this e argumentos 
passados individualmente. Nota: Apesar de a sintaxe desta função ser 
quase idêntica à de apply() , a principal diferença é que call() aceita
 uma lista de argumentos, enquanto apply() aceita um único array de argumentos.
 */

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const prduto = {
    nome: 'Notebook',
    preco: 4886,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0,1
console.log(getPreco())
console.log(prduto.getPreco())

const carro = {preco: 4886, desc: 0.20}
console.log(getPreco.call())
console.log(getPreco.call(carro))
console.log(getPreco.call(carro, 017, `$`))
console.log(getPreco.apply(carro))