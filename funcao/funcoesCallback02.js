// funcoes Callback 02 js
const notas = [7.7, 4.5, 2.9, 1.0, 6.5, 6.8, 9.8, 3.9, 8.9, 9.8];

//sem callback
const notasBaixas1 = [];
for (let i in notas) {
  if (notas[i] < 5) {
    notasBaixas1.push(notas[i]);
  }
}

console.log(notasBaixas1);


// com callback

const notasBaixas2 = notas.filter(function (notas){
    return notas < 5
})
console.log(notasBaixas2)


const notasBaixas7 = notas => notas < 5
const notasBaixas3 = notas.filter(notasBaixas7)
//const notasBaixas3 = notas.filter(notas => notas < 5)
console.log(notasBaixas3)
