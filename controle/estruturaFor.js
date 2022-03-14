/* Estrutura for Denominamos “laço” (loop em inglês) a uma estrutura de repetição. As estruturas de repetição, executam a repetição de um conjunto de instruções enquanto uma determinada condição é verdadeira
*/

let contador = 1;
while(contador <= 10){
    console.log(`cotador = ${contador}`)
    contador++
};

for(let i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
};

const notas = [9.7, 7.4, 8.9, 4.9, 5.7]
for(let i = 0; i < notas.length; i++){
    console.log(`nota = ${notas[i]}`)
}

