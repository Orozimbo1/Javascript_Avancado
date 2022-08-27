// CONSTRUCTOR FUNCTIONS(Funções construtoras) -> retorna um objeto

function Pessoa(nome, sobrenome){ // Começa com letra maiúscula e não precisa do "return"
    // Atributos ou métodos privados
    let ID
    const metodoInterno = (ID) => {
        return ID ? 'Olá' : 'Tchau'
    }

    // Atributos ou métodos públicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = (id) => {
        console.log(`${metodoInterno(id)} ${this.nome}`)
    }
}

const pessoa1 = new Pessoa('João', 'Gonçales') // Precisa do "new" antes de ser chamada 
console.log(pessoa1)// Pessoa { nome: 'João', sobrenome: 'Gonçales', metodo... } 
console.log(pessoa1.nome) // João
console.log(pessoa1.sobrenome)// Gonçales
pessoa1.metodo()// Olá João