//operadores Destructuring parte 2

const [a] = [10];
console.log(a)

const [n1, , n3, n5, n6 = 0] = [10, 7, 9, 8 ];
console.log(n1, n3, n5, n6);

const [ [, nota]] = [[, 5, 7], [6, 9]];
console.log(nota)