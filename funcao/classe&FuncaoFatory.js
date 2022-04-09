// comparaçao classe  & Funcao Fatory

class pessoa {
  constructor(nome) {
    this.nome = nome
  }

  falar() {
    console.log(`meu nome é ${this.nome}`);
  }
}

const p1 = new pessoa("Jhon");
p1.falar();

const criaPessoa = nome => {
    return {
        falar: () => console.log(`meu nome é ${nome}`)
    }
}

const p2 = criaPessoa('jhon')
p2.falar()
