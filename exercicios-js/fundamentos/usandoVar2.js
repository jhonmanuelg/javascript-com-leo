//usando VAR 2

/*
Declarações de variáveis, onde quer que elas ocorram, 
são processadas antes que qualquer outro código seja executado. 
O escopo de uma variável declarada com var é seu contexto atual em execução, 
o qual é a função a qual pertence ou, 
para variáveis declaradas fora de qualquer função, o escopo é o global.
*/

var numero = 1;
{
    var numero = 2;
    console.log('dentro =', numero)
}

console.log('fora =', numero )

var a = 1;
b = 2;

delete this.a; // Lança a exceção TypeError em modo restrito(strict mode). Caso contrário, Falha silenciosamente.
delete this.b;

console.log(a, b); // Throws a ReferenceError.
// A propriedade 'b' foi deletada e não existe mais.