// funcoes Construtora js 
/*
são como as classes do Java, diferenciando apenas pela sintaxe.
 Em questão de funcionamento, tanto funções contrutoras no JavaScript
  quanto Classes no Java têm a mesma utilidade: servir de molde para a criação de objetos

*/

function carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    // metodo pulitico
    this.acelerar = function (){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    // metodo publico
    this.getvelocidadeAtual = function (){
        return velocidadeAtual
    }
}

const uno = new carro()
uno.acelerar()
console.log(uno.getvelocidadeAtual())


const ferrari = new carro(300, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())

console.log(typeof carro)
console.log(typeof ferrari)