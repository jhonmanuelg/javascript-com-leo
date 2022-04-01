// funcoes Arrow

/*
  As arrow functions permitem ter um retorno implícito, que são valores retornados
  sem ter que usar a palavar return. O conceito de funcionamento do this pode variar
  dependendo do contexto e do modo como o JavaScript esta sendo usado (modo strict ou não).

*/

let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //return implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'ola'
}

ola = () => 'ola'
ola = _ => 'ola' // possui um param4
console.log(ola())
