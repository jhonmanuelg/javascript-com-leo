// Notaçãao Literal JS
/*
O que é notação literal?
Notação literal

Um objeto literal é composto por um par de chaves " { } ", 
que envolve uma ou mais propriedades. Cada propriedade segue 
o formato " nome: valor " e devem ser separadas por vírgula. 
Para entender bem, nada melhor que um exemplo.
*/


const a = 1;
const b = 2;
const c = 3;

const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c}
console.log(obj1, obj2)

const nomeAttr = 'nota';
const valorAttr = 7.65

const obj3 = {};
obj3[nomeAttr] = valorAttr;
console.log(obj3)


const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)
  

//forma antigua
const obj5 ={
 funcao1: function(){
     ////
 } ,
 funcao2(){// esta es la forma reducida del 2015
     //...
 }
}

console.log(obj5)