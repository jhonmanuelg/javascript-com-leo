/*
Usando Hoisting foi pensado como uma maneira geral de pensar sobre como os contextos de execução 
(especificamente as fases de criação e execução) funcionam em JavaScript. 
No entanto, o conceito pode ser um pouco confuso a princípio.
*/

function teste() {
  console.log("a =", a);
  var a = 2;
  console.log("a =", a);
}

teste();

console.log("a =", a);
var a = 2;
console.log("a =", a);

function catName(name) {
  console.log("O nome do meu gato é " + name);
}

catName("Tigger");

/*
  O resultado do código acima é: "O nome do meu gato é Tigger"
  */
