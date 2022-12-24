// Dobre os números
const numeros = [5, 65, 1, 3, 12, 23, 34, 11, 6, 8, 43, 17]
const numerosEmDobro = numeros.map(valor => valor * 2)

console.log(numerosEmDobro)

// 1 -> Retorne apenas uma string com o nome da pessoa
// 2 -> Remova apenas a chave "nome" do objeto
// 3 -> Adicione a chave id em cada objeto
const pessoas = [
    {nome: 'Matheus', idade: 25},
    {nome: 'Amanda', idade: 20},
    {nome: 'Alex', idade: 17},
    {nome: 'Stefany', idade: 26},
    {nome: 'Robson', idade: 36}
]
// 1°
const nomePessoa = pessoas.map(pessoa => pessoa.nome)
console.log(nomePessoa)

// 2°
const idadePessoa = pessoas.map(pessoa => {
    const newObj = { ...pessoa }
    delete newObj.nome
    return newObj
})
console.log(idadePessoa)
// ou
const novoArrayIdadePessoa = pessoas.map(pessoa => ({ idade: pessoa.idade }))
console.log(novoArrayIdadePessoa)

// 3°
const idPessoa = pessoas.map((pessoa, indice) => {
    const newObj = { ...pessoa }
    newObj.id = indice
    return newObj
})
console.log(idPessoa)