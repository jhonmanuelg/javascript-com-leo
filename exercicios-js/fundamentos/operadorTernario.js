//operador Ternario
/*
O operador (ternário) é o único operador JavaScript que possui três operadores.
 Este operador é frequentemente usado como um atalho para instrução if.

*/

const resultado = nota => nota >= 7 ? 'aprovado' : 'reprobado';
console.log(resultado(8.3))
console.log(resultado(4.3))

var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? "Access denied" : secondCheck ? "Access denied" : "Access granted";

console.log( access ); // logs "Access granted"

