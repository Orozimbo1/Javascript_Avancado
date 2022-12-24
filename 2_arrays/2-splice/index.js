//

const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia']

// const removidos = nomes.splice(3, 2)
// console.log(nomes, removidos)

// const removidos = nomes.splice(-2, Number.MAX_VALUE)
// console.log(nomes, removidos)

const removidos = nomes.splice(3, 2, 'Miranda')
console.log(nomes, removidos)
