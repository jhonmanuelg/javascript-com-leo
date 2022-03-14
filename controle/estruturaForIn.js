/*estrutura controle For/In, Uma variável é inicializada com uma valor inicial. 
Essa variável é utilizada para controlar a quantidade de vezes em que o conjunto de comandos será executado
*/
const notas = [9.7, 7.4, 8.9, 4.9, 5.7]
for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'ana',
    sobrenome: 'silva',
    edade: 20,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

