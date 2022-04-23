// funçoes de herança #1
const ferrari = {
    modelo: 'f40',
    velMax: 320
}

const volvo = {
    modelo: 'v40',
    velMax: 200
}
console.log(ferrari._proto_);
console.log(ferrari._proto_ === Object.prototype);
console.log(volvo._proto_ === Object.prototype);
console.log(Object.prototype._proto_ === null);

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype)
