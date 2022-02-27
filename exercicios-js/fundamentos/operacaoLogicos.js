// Operacao logicos 
/*
v e v -> v
v e f -> f
f e ! -> f

v ou ! > v
f ou v > v
f ou f > f

v xor v > f
v xor f > v
f xor v > v
f xor f > f

!v > f
!f > v

*/

function compra (trabalho1, trabalho2){
    const compraSorvete = trabalho1 || trabalho2 
    const compraTv50 = trabalho1 && trabalho2
    const compraTv32 = trabalho1 != trabalho2
    const manterSaudavel = !compraSorvete   //operador binario.
    return {compraSorvete, compraTv50, compraTv32, manterSaudavel}
};
console.log(compra(true, true))
console.log(compra(true, false))
console.log(compra(false, true))
console.log(compra(false, false))

