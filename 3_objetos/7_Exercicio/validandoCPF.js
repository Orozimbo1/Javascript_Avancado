// 705.484.450-52 070.987.720-03
/*
7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número for maior que 9, consideramos 0.

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
11  10   9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  0   10 = 284

11 - (284 % 11) = 2 (Segundo dígito)
Se o número for maior que 9, consideramos 0.
*/

// Minha tentativa

function isCPF(CPF) {
    let arrayFatorial = []

    const fatorial = (n) => {
        if (n > 1) {
            arrayFatorial.push(n)
            return n * fatorial(n - 1)
        }
        return n
    }   

    const validandoDigito = (n) => {
        let res = 11 - (n % 11)
        if (res > 9) return 0
        return res
    }

    let cpfArray 
    let i = 10;

    function validandoCpf(cpf) {
        cpfOriginal = cpf
        if(i < 11) {
            cpfLimpo = cpfOriginal.slice(0,11).replace(/\D+/g, '')
            cpfArray = Array.from(cpfLimpo)
        }
        let arrayMultiplicação = []

        fatorial(cpfArray.length + 1)

        cpfArray.map((valor, index) => {
            arrayMultiplicação.push(valor * arrayFatorial[index])
        })
        let digitoEncontrado = arrayMultiplicação.reduce((ac, valor) => {
            ac += valor
            return ac
        })
        cpfArray.push(validandoDigito(digitoEncontrado))
        arrayFatorial = []

        if(i < 11) {
            i = i + 1
            return validandoCpf(cpf)
        }

        const cpfEncontrado = cpfArray.toString().replace(/\D+/g, '')

        if (cpfEncontrado === cpfOriginal.replace(/\D+/g, '')) return console.log('CPF legítimo')
        console.log('CPF inexistente')
        return
    }


    validandoCpf(CPF)
}
isCPF('070.987.720-03')