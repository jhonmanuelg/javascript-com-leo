// funcoes Anonimas js #1

/*
Funções anônimas são muito importantes para entender alguns dos conceitos do funcionamento da linguagem JavaScript,
 são funções que não dependem de nomes, somente são declaradas e armazenadas em uma variável.
  Esta é uma função anônima: function(){alert('foo');

*/

const soma = function (x, y){
    return x + y
}

const imprimirResultado =function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 5)
imprimirResultado(3, 5, soma)
imprimirResultado(3, 5, function (x, y) {
    return x - y
})

imprimirResultado(3, 5, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log("opa")
    }
}

pessoa.falar()