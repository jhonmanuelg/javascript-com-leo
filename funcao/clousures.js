/*  Um encerramento é a combinação de uma função agrupada (incluída) com 
referências ao seu estado circundante (o ambiente léxico) . Em outras palavras, 
um closure lhe dá acesso ao escopo de uma função externa a partir de uma
 função interna. */

 const x = 'global';
 function fora(){
     const x = 'local';
     function dentro(){
         return x
     }
     return dentro
 }
const minhaFuncao = fora()
 console.log(minhaFuncao())