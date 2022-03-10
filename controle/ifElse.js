// estruturas de controles IF com Else

const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprobado!')
    } else {
        console.log('Reprobado!')
    }
}
imprimirResultado(4)
imprimirResultado(10)
imprimirResultado('Epa') // cuidado