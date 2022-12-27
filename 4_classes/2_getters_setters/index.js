const _velocidade = Symbol('velocidade')
class Carro {
    constructor(nome) {
        this.nome = nome
        this[_velocidade] = 0
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return
        if(valor < 0 || valor > 100) return
        this[_velocidade] = valor
    }

    get velocidade() {
        return this[_velocidade]
    }

    acelerar() {
        if(this[_velocidade] >= 100) return
        this[_velocidade]++
    }

    desacelerar() {
        if(this[_velocidade] <= 100) return
        this[_velocidade]--
    }
}

const carro = new Carro('Premio')

// for(let i = 0; i < 200; i++) {
//     carro.acelerar()
// }
carro.velocidade = 100
console.log(carro.velocidade)