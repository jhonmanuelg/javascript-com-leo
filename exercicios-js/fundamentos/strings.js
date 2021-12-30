//tipo em javascript string uma cadena de caracteres delimitado por aspa simple y doble o por classe.

const scola = "cod3r";

console.log(scola.charAt(4));// para tomar um determinado caractere o um codigo de aquel caractere.
console.log(scola.charAt(5));
console.log(scola.charCodeAt(3));
console.log(scola.indexOf('3'));

console.log(scola.substring(1));
console.log(scola.substring(0, 3)); 
console.log('scola '.concat(scola).concat("!"));
console.log(scola.replace(/\d/, "e"));//para sistutior valores.


console.log('ana,maria,pedro'.split(','));
console.log('ana, maria, pedro ' + scola);
console.log('ana,maria,pedro'.split(/./));