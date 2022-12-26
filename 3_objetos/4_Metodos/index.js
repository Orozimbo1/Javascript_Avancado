/**
 * Object.values
 * Object.entries
 * Object.assign(des, any)
 * Object.getOwnPropertyDescriptor(o, 'prop')
 * ... (spread)
 * Object.keys (retorna as chaves)
 * Object.freeze (congela o objeto)
 * Object.defineProperty (define uma propriedade)
 * Object.defineProperties (define varias propriedades)
 */

const produto = {nome: 'Camiseta', preco: 25}
Object.freeze(produto) // congela o objeto, nao permitindo alteração

console.log(Object.getOwnPropertyDescriptor(produto, 'nome')) // mostra as propriedades da chave de um objeto

const bermuda = {
     ...produto, // spread, copia um objeto para o outro
     material: 'Jeans'
    } 
const calca = Object.assign({}, produto, {material: 'Jeans'}) // assign, tambem copia um objeto para o outro

bermuda.nome = 'Bermuda'
calca.nome = 'Calça'
console.log(produto)
console.log(bermuda)
console.log(calca)

console.log(Object.keys(produto)) // retorna as chaves do objeto
console.log(Object.values(produto)) // retorna os valores do objeto
console.log(Object.entries(produto)) // retorna um array contendo um array para cada chave e valor