// tipos em javascript "number"

const peso1 = 1.0;
const peso2 = Number('2.1');

console.log(peso1, peso2);
console.log(Number.isInteger(peso2));//para saber sim peso é numero entero si ó não "isInteger".
console.log(Number.isInteger(peso1));//


const avaliacao1 = 9.871;
const avaliacao2 = 6.871;


const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));
console.log(media.toString());// para converter os valores.
console.log(media.toString(2));// convierte a numero binarios.
console.log(typeof media);