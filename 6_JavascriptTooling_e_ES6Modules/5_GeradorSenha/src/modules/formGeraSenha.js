import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada')
const qtdCaracteres = document.querySelector('.qtd-caracteres')
const checkMaiuscula = document.querySelector('.chk-maiusculas')
const checkMinuscula = document.querySelector('.chk-minusculas')
const checkNumero = document.querySelector('.chk-numeros')
const checkSimbolo = document.querySelector('.chk-simbolos')
const gerarSenha = document.querySelector('.gerar-senha')

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera()
    })
}

function gera() {
    return geraSenha(
        qtdCaracteres.value,
        checkMaiuscula.checked,
        checkMinuscula.checked,
        checkNumero.checked,
        checkSimbolo.checked
        )
        ||
        'Nada selecionado.'
}