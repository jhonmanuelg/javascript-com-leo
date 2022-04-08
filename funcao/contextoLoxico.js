const valor = "global";

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = "Local"
    minhaFuncao()
}

exec()