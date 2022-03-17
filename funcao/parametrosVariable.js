// parametro Variable en JS
function soma() {
    let soma = 0 
    for (i in arguments) {
        soma += arguments[i] 
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1, 3, 4,))
console.log(soma(1.2, 1.3, " teste"))
console.log(soma('a', 'b', 'c'))