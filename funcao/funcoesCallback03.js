// exemplo de callback no browser

document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('o evento ocurrio')
}

/*
ƒ (e) {
    console.log('o evento ocurrio')
}
1 VM495:2 o evento ocurrio
*/