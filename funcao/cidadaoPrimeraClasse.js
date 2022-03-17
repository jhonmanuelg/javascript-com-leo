// Funçao em JS é first-class object (Citizens)
// Higher function de alta horden
/*
Primera classse de funcao é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. 
Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.
*/

//Criar de forma literal

function fun1() { }

// Armazenar em uma variavel

const fun2 = function () {}

//Armazenar em um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 8))

//Armazenar em um atributo de objeto

const obj = {}
obj.falar = function () {return `Opa`}
console.log(obj.falar())

// passar funçao como param
function run(fun) {
    fun()
}

run(function () {console.log('executando...')})


// um funçao pode retornar/conter um funçao
function soma (a, b){
    return function (c) {
        console.log(a + b + c)
    }
}

soma(3, 6,)(7);
const cincoMais = soma(3, 7)
cincoMais(6)

