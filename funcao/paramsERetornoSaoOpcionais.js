// parametro E Retorno Sao Opcionais em uma funçao

function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(4, 8))
console.log(area(4, 4))
console.log(area(2))
console.log(area())
console.log(area(4, 8, 7, 9))
console.log(area(1.1, 2.2,  "Teste"))