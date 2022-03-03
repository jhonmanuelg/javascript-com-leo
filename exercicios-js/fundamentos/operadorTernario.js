//operador Ternario

const resultado = nota => nota >= 7 ? 'aprovado' : 'reprobado';
console.log(resultado(8.3))
console.log(resultado(4.3))

var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? "Access denied" : secondCheck ? "Access denied" : "Access granted";

console.log( access ); // logs "Access granted"

var stop = false, age = 23;

age > 18 ? (
    alert("OK, you can go."),
    location.assign("continue.html")
) : (
    stop = true,
    alert("Sorry, you are much too young!")
);