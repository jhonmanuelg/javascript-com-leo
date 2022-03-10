//funcao sem retorno. 

function imprimirSuma(a, b){
    console.log(a + b);

}

imprimirSuma(2, 4);
imprimirSuma(6);
imprimirSuma(2, 45, 4, 6, 8, 9);// vai sumar o resto vai innorar.

// funcao com retorno.



function soma(a, b = 0){
    return a + b
}
 console.log(soma(2, 3))
 console.log(2)
 console.log()
