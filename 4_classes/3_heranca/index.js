class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já está ligado.`)
        }

        this.ligado = true
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já está desligado.`) 
        }

        this.ligado = false
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome)

        this.cor = cor
        this.modelo = modelo
    }
}

const smartphone = new Smartphone('Motorola', 'Camaleão', 'Moto g6 play')
smartphone.ligar()
console.log(smartphone)