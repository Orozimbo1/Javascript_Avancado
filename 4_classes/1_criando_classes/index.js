class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        return `${this.nome} está falando.`
    }
}

// Comparando com a funão construtora
function Pessoa2(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}
Pessoa2.prototype.falar = function() {
    return `${this.nome} está falando.`
}

const pessoa1 = new Pessoa('Matheus', 'Orozimbo')
console.log(pessoa1)

const pessoa2 = new Pessoa2('Maria', 'Orozimbo')
console.log(pessoa2)