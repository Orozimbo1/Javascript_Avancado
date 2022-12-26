// // Construtora -> molde (classe)
// function Pessoa(nome, sobrenome) {
//     this.nome = nome
//     this.sobrenome = sobrenome
// } 

// Pessoa.prototype.nomeCompleto = function () {
//     return this.nome + ' ' + this.sobrenome
// }

// // instância
// const pessoa1 = new Pessoa('Matheus', 'Orozimbo') // <- Pessoa = Função contrutora
// const pessoa2 = new Pessoa('Maria', 'Augusta') // <- Pessoa = Função contrutora

// console.dir(pessoa1)
// console.dir(pessoa2.nomeCompleto())

// Manipulando Prototype

const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
}

const objB = {
    chaveB: 'B'
    // __proto__: ObjA
}

const objC = {
    chaveC: 'C'
    // __proto__: ObjB
}

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)
console.log(objB.chaveA)
console.log(objC.chaveA)

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
} 

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
} 

const produto = new Produto('Camiseta', 100)

produto.desconto(10)
console.log(produto)

produto.aumento(100)
console.log(produto)

const produto2 = {
    nome: "Bermuda",
    preco: 80
}

Object.setPrototypeOf(produto2, Produto.prototype)

produto2.aumento(100)
console.log(produto2)

const produto3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: "Calça"
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 350
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: "G"
    },

})

produto3.desconto(20)

console.log(produto3)