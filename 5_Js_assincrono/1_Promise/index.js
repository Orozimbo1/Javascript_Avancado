function tempoAleatorio(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function conectarDB(msg) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE')

        setTimeout(() => {
            resolve(msg)
        }, tempoAleatorio(1, 3))

    })
}

conectarDB('1 Conectando com o Database..')
    .then(resposta => {
        console.log(resposta)
        return conectarDB('2 Conectado..')
    }).then(resposta => {
        console.log(resposta)
        return conectarDB('3 Tratando os dados..')
    }).then(resposta => {
        console.log(resposta)
    }).then(() => {
        console.log('Exibindo os dados.')
    }).catch(e => {
        console.log('ERRO:', e)
    })

console.log('Será exibido antes de todos.')
