/*
A instrução for cria um loop que consiste em três expressões opcionais, 
dentro de parênteses e separadas por ponto e vírgula, 
seguidas por uma declaração ou uma sequência de declarações executadas em sequência.
*/

/*
for ([inicialização]; [condição]; [expressão final])
   declaração
*/
for (var i = 0; i < 10; i++){
    console.log(i)
};
console.log('i =', i);

var i = 0;
for (; i < 4; i++) {
    console.log(i);
    // more statements
}

for (var i = 0;; i++) {
    console.log(i);
    if (i > 20) break;
    // more statements
 }