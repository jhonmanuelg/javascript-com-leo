// Utilizando funçao 2 com typeof, new, class 

console.log(typeof Object);
console.log(typeof new Object());
const Cliente = function () {};
console.log(typeof Cliente);
console.log(typeof new Cliente());

class produto {} //es 2015 (ES6);
console.log(typeof produto);
console.log(typeof new produto);