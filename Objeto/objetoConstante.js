// Objeto constante.

//pessoa -> 123 {...}

const pessoa = {nome: 'jhon'}
pessoa.nome = 'pedro'
console.log(pessoa );

// pessoa --> 456 -> {..}
//pessoa = {nome: 'ana'}

Object.freeze(pessoa);
pessoa.end = 'raul'
pessoa.nome = 'maria'
console.log(pessoa)
delete pessoa.nome
console.log(pessoa.nome)

