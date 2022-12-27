function tempoAleatorio(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function espera(msg) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('BAD VALUE')
            return
        }

        setTimeout(() => {
            resolve(msg)
        }, tempoAleatorio(1, 3))

    })
}

// // Usando o .then()
// espera('Fase 1')
//     .then(resposta => {
//         console.log(resposta)
//         return espera('Fase 2')
//     }).then(resposta => {
//         console.log(resposta)
//         return espera('Fase 3')
//     }).then(resposta => {
//         console.log(resposta)
//     }).catch(e => {
//         console.log('ERRO:', e)
//     })

async function executa() {
    try {
        const fase1 = await espera('Fase 1')
        console.log(fase1)

        const fase2 = await espera('Fase 2')
        console.log(fase2)

        const fase3 = await espera('Fase 3')
        console.log(fase3)
        console.log('Terminamos na ', fase3)
    } catch(e) {
        console.log('ERRO:', e)
    }

}
executa()