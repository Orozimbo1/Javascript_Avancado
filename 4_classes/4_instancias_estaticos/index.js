class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    // Método de instância
    aumentarVolume() {
        this.volume += 2
    }

    diminuirVolume() {
        this.volume -= 2
    }

    // Método estático
    static trocaPilha() {
        console.log('Ok, vou trocar')
    }
}

const controle = new ControleRemoto('Samsung')
controle.aumentarVolume() // método de instância, acessado apenas pela instância, nesse caso a variável "controle"
console.log(controle)
// controle.trocaPilha() -> Erro, método estático só pode ser acessado pela classe
ControleRemoto.trocaPilha()