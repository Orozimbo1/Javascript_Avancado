const falar = {
    falar() {
        console.log(`${this.nome} está falando.`)
    }
}

const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`)
    }
}

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`)
    }
}

// const pessoaPrototype = { ...falar, ...comer, ...beber }
const pessoaPrototype = Object.assign({}, falar, comer, beber)

function criaPessoa(nome, sobrenome){

    return Object.create(pessoaPrototype, {
        nome: {
            enumerable: true,
            configurable: true,
            value: nome
        },
        sobrenome: {
            enumerable: true,
            configurable: true,
            value: sobrenome
        }
    })
}

const pessoa1 = new criaPessoa('Matheus', 'Orozimbo')
console.log(pessoa1)