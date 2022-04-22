// Getters Setters js

/*
 as propriedades do acessador são métodos que obtêm ou definem o valor de um objeto.
  Para isso, usamos estas duas palavras-chave: get - para definir um método getter 
  para obter o valor da propriedade. set - para definir um método setter para 
  definir o valor da propriedade.
*/

const sequencia = {
    _valor: 1, //converçao
    get valor(){
        return this._valor++
    },
    set valor(valor) {
        //this._valor = valor
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 9000;
console.log(sequencia.valor, sequencia.valor);