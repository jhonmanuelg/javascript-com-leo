//usando let 1 variável local no escopo do bloco atua
//Declara uma variável local no escopo do bloco atual, opcionalmente iniciando-a com um valor.

var numero = 1;
{
    let numero = 2;
    console.log('dentro =', numero)
}

console.log('fora =', numero)