// 1 -> Dobre os números
// 2 -> Retorne um array com pares (Filter)
// 3 -> Retorne um array com o dobro dos valores (Map)

const numeros = [5, 65, 1, 3, 12, 23, 34, 11, 6, 8, 43, 17]

// 1°
const total = numeros.reduce((acumulador, valor) => {
    acumulador += valor
    return acumulador
}, 0)
console.log(total)

// 2°
const numerosPares = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, [])
console.log(numerosPares)

// 3° 
const dobroNumeros = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2)
    return acumulador
}, [])
console.log(dobroNumeros)

// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Matheus', idade: 25},
    {nome: 'Amanda', idade: 50},
    {nome: 'Alex', idade: 17},
    {nome: 'Stefany', idade: 26},
    {nome: 'Robson', idade: 36}
]

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador
    return valor
})
console.log(pessoaMaisVelha)