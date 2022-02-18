//operadores Destructuring parte 3 en anvito de una função 

function rand({min = 0, max = 100 }){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}
const obj = {max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({min: 955}))