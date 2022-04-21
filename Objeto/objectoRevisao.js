// Aula de reviçao coloçao dinamica de pares chave/valores

const produto = new Object
produto.nome = 'caderira'
produto['marca do produto'] = 'gadeira'
produto.preco = 200;

console.log(produto)
delete produto.preco;
delete produto['marca do produto'];
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 56,
    proprietario:{
        nome: 'raul',
        idade: 56,
        endereco: {
            logradoru: 'rua abc',
            numero: 123
        }
    },
    condutores:[{
        nome: 'junio',
        idade: 37
    },{
        nome: 'ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
        ///
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradoru'] = 'av gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)
//console.log(carro.condutores.length)