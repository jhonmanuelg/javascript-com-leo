function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('notibook', 546.584))
console.log(criarProduto('ipad', 25487.56))