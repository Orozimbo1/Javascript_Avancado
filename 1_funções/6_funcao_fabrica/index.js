// FACTORY FUNCTION (Função fábrica)

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        fala(assunto) {
            return `O ${this.nome} está falando ${assunto}`
        },

        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')    
        },
        
        altura: altura,
        peso: peso,

        //Getter
        get imc(){
            const indice = this.peso / this.altura ** 2
            return indice.toFixed(2)
        }
    }
}

const p1 = (criaPessoa('Matheus', 'Orozimbo', 1.80, 80))
p1.nomeCompleto = 'Joao Almeida Santos'
console.log(p1.nomeCompleto)
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.imc)

