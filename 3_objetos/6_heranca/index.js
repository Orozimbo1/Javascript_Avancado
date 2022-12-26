// Produto -> aumento, desconto
// Camiseta = Cor, Caneca = Material
function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia
}
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + this.preco * (percentual / 100)
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque
        },
        set: function(valor) {
            if (typeof valor !== 'number' ) {
                throw new TypeError('"Estoque" só aceita números.')
            }
            console.log(`"Estoque" alterado! De:"${estoque}" Para:"${valor}"`)
            estoque = valor
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

Caneca.prototype.desconto = function(percentual) {
    this.preco = this.preco - this.preco * (percentual / 100)
}
Caneca.prototype.aumento = function(percentual) {
    this.preco = this.preco + this.preco * (percentual / 100)
}

const produto = new Produto('Generico', 33)
console.log(produto)

const camiseta = new Camiseta('Camiseta social', 25, 'Amarela')
camiseta.aumento(10)
console.log(camiseta)

const caneca = new Caneca('Caneca', 15, 'Porcelana', 12)
caneca.desconto(10)
console.log(caneca)

caneca.aumento(100)
console.log(caneca)