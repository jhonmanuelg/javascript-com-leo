/*
Uma função é um procedimento de JavaScript - um conjunto de instruções que
 executa uma tarefa ou calcula um valor. Para usar uma função, 
você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.
*/
console.log(typeof Object); // Object es uma função
class produto {}
console.log(typeof produto);

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions

function minhaFuncao(objeto) {
    objeto.make = "Toyota";
  }
  
  var meucarro = {make: "Honda", model: "Accord", year: 1998};
  var x, y;
  
  x = meucarro.make;     // x recebe o valor "Honda"
  
  minhaFuncao(meucarro); // y recebe o valor "Toyota" 
  y = meucarro.make;     // (a propriedade make foi alterada pela função)
  console.log(minhaFuncao)
  console.log(meucarro)
  