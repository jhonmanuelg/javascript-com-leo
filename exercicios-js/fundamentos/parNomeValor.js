const saudacao = "Opa"; // contexto lexico 1

function exec() {
  const saudacao = " Falaaa"; // contexto léxico
  return saudacao;
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'rua Muito legal',
        numero: 234
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);
