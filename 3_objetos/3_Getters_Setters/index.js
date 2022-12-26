// defineProperty() - defineProperties()
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: false, // configurável
        get: function() {
            return estoquePrivado
        },
        set: function(valor) {
            if (typeof valor !== 'number' ) {
                throw new TypeError('"Estoque" só aceita números.')
            }
            console.log(`"Estoque" alterado! De:"${estoquePrivado}" Para:"${valor}"`)
            estoquePrivado = valor
        }
    })
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome
        },
        set nome(valor) {
            nome = valor
        }
    }
}

const produto1 = new Produto('Camiseta', 20, 45)
produto1.estoque = 14
console.log(produto1.estoque)

const produto2 = criaProduto('Camiseta')
produto2.nome = 'Bermuda'
console.log(produto2.nome)