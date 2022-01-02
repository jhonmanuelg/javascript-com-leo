// usando templete strings son cadenas literales de texto incrustadas en el código fuente que permiten su interpolación mediante expresiones 

const nome = 'Rebeca'; 
const concatenacao = 'Olá ' + nome + '!';

const template = `
ola
${nome}!`;
console.log(concatenacao, template);

// expressoes
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`);

/*
Su sintaxis es sencilla y consta de dos aspectos fundamentales:

Se utilizan las comillas invertidas (`) para delimitar las cadenas
Para añadir marcadores de posición (o placeholders) utilizamos el signo de dolar ($) seguido de llaves
*/