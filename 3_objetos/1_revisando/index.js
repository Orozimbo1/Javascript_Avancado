// // Forma literal
// const pessoa = {
//     nome: "Matheus",
//     sobrenome: "Orozimbo",
//     idade: 25
// }
// console.log(pessoa.nome)
// console.log(pessoa.sobrenome)
// console.log(pessoa.idade)

// console.log(pessoa['nome'])
// console.log(pessoa['sobrenome'])
// console.log(pessoa['idade'])

// const chave = 'nome'
// console.log(pessoa[chave])

// // Construtor
// const pessoa1 = new Object()
// pessoa1.nome = 'Matheus'
// pessoa1.sobrenome = 'Orozimbo'
// pessoa1.idade = 25
// pessoa1.falarNome = function() {
//     return (`${this.nome} está falando seu nome.`)
// }
// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date
//     return dataAtual.getFullYear() - this.idade
// }

// for (let chave in pessoa1) {
//     console.log(chave)
//     console.log(pessoa1[chave])
// }

// console.log(pessoa1)
// console.log(`A ano de nascimento de ${pessoa1.nome} é ${pessoa1.getDataNascimento()}`)

// delete pessoa1.idade
// console.log(pessoa1)

// // Factory functions
// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome,
//         sobrenome,
//         idade,
//         get apresentacao() {
//             return `${this.nome} ${this.sobrenome} tem ${this.idade} anos`
//         }
//     }
// }
// const novaPessoa = criaPessoa('Matheus', 'Orozimbo', 25)
// console.log(novaPessoa.apresentacao)

// Constructor function
function Pessoa(nome, sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade

    Object.freeze(this)
}
const p1 = new Pessoa('Matheus', 'Orozimbo', 25)
Object.freeze(p1) // Trava o objeto não deixando ser alterado
p1.nome = 'Wallace'
console.log(p1)