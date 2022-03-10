// usando estrutura IF #1
/*
IF é uma estrutura de controle utilizada para tomar decisões. Realiza umas ou mais operações em função de uma expressão na forma de condição. Basicamente primeiro é dada uma condição e caso essa condição seja positiva, ele executa a ação.

*/
function soBaoNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBaoNoticia(8.1)
soBaoNoticia(9.0)
soBaoNoticia(5.0)

function seForVerdaderoEuFalo(valor)
{
    if(valor){
        console.log('É verdade...' + valor)
    }
}

seForVerdaderoEuFalo() //faso
seForVerdaderoEuFalo(null) //faso
seForVerdaderoEuFalo(undefined) //faso
seForVerdaderoEuFalo(NaN) //faso
seForVerdaderoEuFalo('') //faso
seForVerdaderoEuFalo(0) //faso
seForVerdaderoEuFalo(-1) //verdadero
seForVerdaderoEuFalo('!') //verdadero
seForVerdaderoEuFalo(' ') //verdadero
seForVerdaderoEuFalo([3]) //verdadero
seForVerdaderoEuFalo({}) //verdadero
