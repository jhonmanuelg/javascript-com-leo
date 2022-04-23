// Funções importantesde Objet


const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})


Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '10/201980'
});

pessoa.dataNascimento = '05/06/2007'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


// Obketo.assign (ECMAScript 2015)

const dest = {a: 1};
const dest2 = {b: 2};
const dest3 = {c: 3};
const dest4 = {d: 4, a: 4};
const obj = Object.assign(dest, dest2, dest3, dest4);
Object.freeze(obj)
obj.d = 1234;
console.log(obj)

