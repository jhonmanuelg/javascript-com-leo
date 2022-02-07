// ver da aula no navegador 
// const a = {nomw: 'tete'}
// undefined
// a
// {nomw: 'tete'}
// const b = a
// undefined
// b.nme = 'opa'
// 'opa'
// a
// {nomw: 'tete', nme: 'opa'}
let valor ;// não incializada
console.log(valor);
//undefined

valor = null;// auséncoia de valor
console.log(valor);
//console.log(valor.toString());  

const produto = {}
console.log(produto.preco);
console.log(produto)

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; //evite atributo undefined
console.log(!!produto.preco);
//delete produto.preco para tirar a variable
console.log(produto);

produto,preco = null; //sim preço
console.log(!!produto.preco);
console.log(produto);

