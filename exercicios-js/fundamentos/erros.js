// funçao para error 

function tratarErroElancar (error){
    //throw new Error ('....')
    //throw "jho error 10/02/2022"
    throw{
        nome: error.nome,
        msg: error.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.nome.toUpperCae() + '!!!')
    } catch (e) {
        tratarErroElancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)