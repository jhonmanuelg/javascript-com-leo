// this Pode Variar
/*
A palavra-chave this comporta-se um pouco diferente em Javascript se comparado com outras linguagens. 
Também possui algumas diferenças entre o modo estrito e o modo não estrito. Em muitos casos, o valor 
this é determinado pela forma como a função é chamada.

*/

var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true

// Chama como um método de um objeto
var obj = {foo: foo};
console.log(obj.foo() === globalObject); // true

// Tentativa de definir this usando call
console.log(foo.call(obj) === globalObject); // true

// Tentantiva de definir this usando bind
foo = foo.bind(obj);
console.log(foo() === globalObject); // true


// Cria obj com um método bar que retorna uma função que
// retorna seu this. A função retornada é criada como
// uma função arrow, para que seu this esteja permanentemente
// ligado ao this da função que a envolve. O valor de bar pode ser // definido na chamada, que por sua vez define o valor da função
// retornada.
var obj = { bar : function() {
    var x = (() => this);
    return x;
  }
};

// Chama bar como método de obj, configurando seu this como obj
// Assina à variável fn uma referência para a função retornada
var fn = obj.bar();

// Chamar fn, sem definir this, por padrão, referenciaria
// ao objeto global ou undefined em modo estrito (strict mode)
console.log(fn() === obj); // true