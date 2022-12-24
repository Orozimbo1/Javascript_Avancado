// Retornar a soma do dobro de todos os pares
// 1 -> Filtrar pares
// 2 -> Dobrar os valores
// 3 -> Reduzir (somar tudo)

const numeros = [5, 65, 1, 3, 12, 23, 34, 11, 6, 8, 43, 17]

const numerosPares = numeros.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((acumulador, valor) => acumulador + valor)  
console.log(numerosPares)