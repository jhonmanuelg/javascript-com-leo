/* Estrategias De Criaçao De Objetos en JS.

*/

//Usando notaçao literal
const obj1 = {};
console.log(obj1);

// Objet en js

console.log(typeof Object, typeof new Object());

const obj2 = new Object();
console.log(obj2);

// funçoes construtora
function produto(nome, preco, desc) {
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc);
  };
}

const p1 = new produto("caneta", 7.99, 0.14);
const p2 = new produto("notebook", 2999.0, 0.25);
console.log(
  "caneta:",
  p1.getPrecoComDesconto(),
  "notebook:",
  p2.getPrecoComDesconto()
);



// funçao factory
function caiarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    },
  };
}

const f1 = caiarFuncionario('jhon', 7899.00, 5);
const f2 = caiarFuncionario('maria', 1065.00, 11.4)

console.log('jhon:', f1.getSalario(), 'maria:',f2.getSalario());

// object.create

const filha = Object.create(null)
filha.nome  = 'ana'
console.log(filha)

// um funçao famosa que retorna objet...
const fromJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON.info)
