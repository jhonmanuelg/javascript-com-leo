let isAtivo = false
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);
//Boolean como se fai para tranformar um valor de verdadero o false.

isAtivo = 1;
console.log(!!isAtivo)//coloncandao dos veces pasa ser true.
console.log(!isAtivo)//coloncandao dos veces pasa ser false.


//esta situaçao resolve para uma situação verdadero

console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!'texte');
console.log(!!' ');
console.log(!!{});
console.log(!![]);
console.log(!!Infinity);
console.log(!!(isAtivo = true));


//esta situaçao resolve para uma situação false
console.log('os false');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!null);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('Para finalizar');
console.log(!!('' || null || 0 || ' '));

let nome = '';
console.log(nome || 'desconhecido')

