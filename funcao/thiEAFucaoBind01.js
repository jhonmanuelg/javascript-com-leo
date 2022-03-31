// this E A Fucao Bind js # 1

/*
bind() O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave this 
definida com o valor fornecido, com uma sequência determinada de argumentos precedendo quaisquer 
outros que sejam fornecidos quando a nova função é chamada.

*/

const pessoa = {
    saudacao: 'Bom dia! Amor',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e oo

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

