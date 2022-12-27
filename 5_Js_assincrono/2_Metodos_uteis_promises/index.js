// Promise.all,  Promise.race,  Promise.resolve,  Promise.reject

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

const promises = [
    espera('Primeira promise'),
    espera('Segunda promise'),
    espera('Terceira promise')
]

// Promise.all
Promise.all(promises)  // Termina todas as promises e te entrega todas ao mesmo  tempo
    .then(function(valor) {
        console.log(valor)
    }).catch(function(erro) {
        console.log(erro)
    })

// Promise.race
Promise.race(promises)  // Te entrega a primira promise resolvida
    .then(function(valor) {
        console.log(valor)
    }).catch(function(erro) {
        console.log(erro)
    })

// Promise.resolve
function baixarPagina() {
    const emCache = true

    if(emCache){
        return Promise.resolve('Página em cache.')
    } else {
        return espera('Página baixada.')
    }
}
baixarPagina()
    .then(resposta => {
        console.log(resposta)
    }).catch(e => {
        console.log(e)
    })

// Promise.reject
function baixarPagina2() {
    const emCache = true

    if(emCache){
        return Promise.reject('Página em cache.')
    } else {
        return espera('Página baixada.')
    }
}
baixarPagina2()
    .then(resposta => {
        console.log(resposta)
    }).catch(e => {
        console.log('ERRO:', e)
    })
    
