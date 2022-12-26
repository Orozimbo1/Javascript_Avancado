// defineProperty() - defineProperties()
function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // define o valor
        writable: false, // nao deixa ser alterado
        configurable: false // configurável
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // define o valor
            writable: false, // nao deixa ser alterado
            configurable: false // configurável
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // define o valor
            writable: false, // nao deixa ser alterado
            configurable: false // configurável
        }
    })
}

const produto1 = new Produto('Camiseta', 20, 45)
console.log(produto1)