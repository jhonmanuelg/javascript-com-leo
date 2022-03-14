// Usado estruturas de controles com seleçao multipla IF, ELSE, IF.


Number.prototype.entre = function (inicio, fim){
    return this >= inicio &&  this <= fim
}

const imprimirResultado = function (nota){
    if (nota.entre(9, 10)) {
        console.log('cuadro de honra' )
    }else if(nota.entre(7, 8.99)){
        console.log('aprovado')
    } else if(nota.entre(4, 6.99)){
        console.log('Reprovado')
    }else if(nota.entre(0, 3.99)){
        console.log('Nota invalida')
    }
    
}
imprimirResultado(10)
imprimirResultado(8.5)
imprimirResultado(7.5)
imprimirResultado(4.5)
imprimirResultado(1.6)