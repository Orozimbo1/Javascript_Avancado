// 705.484.450-52 070.987.720-03
class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    isSequence() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
    }

    geraNovoCPF() {
        const cpfParcial = this.cpfLimpo.slice(0, -2)
        const digito1 = ValidaCPF.geraDigito(cpfParcial)
        const digito2 = ValidaCPF.geraDigito(cpfParcial + digito1)
        this.novoCPF = cpfParcial + digito1 + digito2
    }

    valida() {
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.isSequence()) return false
        if(this.cpfLimpo.length !== 11) return false
        this.geraNovoCPF()

        return this.novoCPF === this.cpfLimpo
    }
    
    static geraDigito(cpfParcial) {
        let total = 0
        let reverso = cpfParcial.length + 1

        for(let valor of cpfParcial) {
            total += reverso * Number(valor)
            reverso--
        }
        
        const digito = 11 - (total % 11)
        return digito >= 9 ? '0' : String(digito)
    }
}

const validaCpf = new ValidaCPF('070.987.720-03')

if(validaCpf.valida()) {
    console.log('CPF válido')
} else {
    console.log('CPF inválido')
}