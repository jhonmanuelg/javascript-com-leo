
/* unsando let em LOOP permite que você declare variáveis limitando seu escopo no bloco, 
instrução, ou em uma expressão na qual ela é usada.

*/
for (let i = 0; i < 4; i++) {
    console.log(i)
    // more statements
 }

 //console.log('i =', i)

 var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // O escopo é dentro do bloco if
  var b = 1; // O escopo é dentro da função

  console.log(a);  // 4
  console.log(b);  // 1
}

console.log(a); // 5
console.log(b); // 1

