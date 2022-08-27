/**
 * FUNÇÕES GERADORAS
 * São funções que tem a capacidade de entrega os valores por etapas, não só de uma vez como as outras.
 */

function* geradora1(){ // Precisa do "*" depois da palavra "function".

    yield 'Valor 1'
    yield 'Valor 2'
    yield 'Valor 3'

}

const g1 = geradora1()
console.log(g1.next()) // Retornará o objeto que foi criado com a função, {value: 'Valor 1', done: false}, o "done: false" indica que ainda contém valores a ser apresentados na função e somente quando todos os valores forem apresentados ele retornará "done: true" 
console.log(g1.next().value) // 'Valor 2', a palavra "next" é obrigatória e o "value" é a chave que contém o valor, nesse caso 'Valor 2'
console.log(g1.next().value) // 'Valor 3', a palavra "next" é obrigatória e o "value" é a chave que contém o valor, nesse caso 'Valor 3'
console.log(g1.next().value) // 'undefined', porque os outros 3 valores ja foram apresentados 

function* geradora2(){ // Precisa do "*" depois da palavra "function".

    yield 'Valor 10'
    yield 'Valor 20'
    yield 'Valor 30'

}
const g2 = geradora2()

for(let valor of g2){
    console.log(valor)
}

function* geradora3() {
    let i = 0

    while(true){ // Loop infinito
        yield i
        i++
    }
}
const g3 = geradora3()
console.log(g3.next().value)// "0" Como o valor a ser mostrado é um loop infinito, nessa função não terá um limite de vezes a ser chamada.
console.log(g3.next().value)// "1"
console.log(g3.next().value)// "2"
console.log(g3.next().value)// "3" E assim por diante

function* geradora4() {
    yield 1
    yield 2
    yield 3
}

function* geradora5() {
    yield* geradora4() // A função "geradora5()" irá atribuir os valores da "geradora4() "
    yield 4
    yield 5
    yield 6
}
const g5 = geradora5()
for(let valor of g5){
    console.log(valor)
}

function* geradora6(){
    
    yield () => console.log('Vim do y1')
    yield () => console.log('Vim do y2')

}
const g6 = geradora6()
const y1 = g6.next().value
const y2 = g6.next().value
y1()
y2()
