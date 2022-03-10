function teste1(nun) {
    if(nun > 7){
        console.log(nun)
        console.log('Final')
    }
}

teste1(6)
teste1(8)


function teste2(nun){
    if(nun > 7); { // cuidado com o ; , não usar com as estruturas de controles
        console.log(nun)
    }
}

teste2(8)
teste2(3)
