// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log(`Saldo insuiciente. Saldo: ${this.saldo}`)
        return
    }

    this.saldo -= valor
    console.log(`Você sacou R$${valor.toFixed(2)}, tem agora R$${this.saldo.toFixed(2)} na sua conta.`)
}
Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    console.log(`Você depositou R$${valor.toFixed(2)}, tem agora R$${this.saldo.toFixed(2)} na sua conta.`)
}
Conta.prototype.verSaldo = function() {
    console.log(`-----------SALDO------------`)
    console.log(`------Ag/c: ${this.agencia}/${this.conta}-----`)
    console.log(`----------R$${this.saldo.toFixed(2)}----------`)
}

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}
ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuiciente. Saldo: ${this.saldo}, Limite: ${this.limite}`)
        return
    }

    this.saldo -= valor
    console.log(`Você sacou R$${valor.toFixed(2)}, tem agora R$${this.saldo.toFixed(2)} na sua conta.`)
}

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}
ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

const contaCorrente = new ContaCorrente('11', '22', 100, 50)
contaCorrente.sacar(130)

const contaPoupanca = new ContaPoupanca('22', '11', 100)
contaPoupanca.sacar(130)