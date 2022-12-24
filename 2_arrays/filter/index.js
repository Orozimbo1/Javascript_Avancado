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

// 1 -> Retorne as pessoas que tenham um nome com 5 letras ou mais
// 2 -> Retorne as pessoas que tenham mais de 25 anos
// 3 -> Retorne as pessoas cujo o nome termine com a letra a
const pessoas = [
    {nome: 'Matheus', idade: 25},
    {nome: 'Amanda', idade: 20},
    {nome: 'Alex', idade: 17},
    {nome: 'Stefany', idade: 26},
    {nome: 'Robson', idade: 36}
]
// 1°
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5)
console.log(pessoasComNomeGrande)

// 2°
const pessoasComMaisDeVinteeCincoAnos = pessoas.filter(obj => obj.idade > 25)
console.log(pessoasComMaisDeVinteeCincoAnos)

// 3°
const pessoasComNomeTerminadoEmA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(pessoasComNomeTerminadoEmA)