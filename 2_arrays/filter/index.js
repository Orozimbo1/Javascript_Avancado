// Retorne os números maiores que 10
const numeros = [5, 65, 1, 3, 12, 23, 34, 11, 6, 8, 43, 17]

// Forma mais extensa e menos comum
// function callbackFilter(valor) {
//     return valor > 10
// }

// const numerosFiltrados = numeros.filter(callbackFilter)

// Forma mais comum
const numerosFiltrados = numeros.filter(valor => valor > 10)
console.log(numerosFiltrados)

// Retorne as pessoas que tenham um nome com 5 letras ou mais
// Retorne as pessoas que tenham mais de 25 anos
// Retorne as pessoas cujo o nome termine com a letra a
const pessoas = [
    {nome: 'Matheus', idade: 25},
    {nome: 'Amanda', idade: 20},
    {nome: 'Alex', idade: 17},
    {nome: 'Stefany', idade: 26},
    {nome: 'Robson', idade: 36}
]
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5)
const pessoasComMaisDeVinteeCincoAnos = pessoas.filter(obj => obj.idade > 25)
const pessoasComNomeTerminadoEmA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))

console.log(pessoasComNomeGrande)
console.log(pessoasComMaisDeVinteeCincoAnos)
console.log(pessoasComNomeTerminadoEmA)