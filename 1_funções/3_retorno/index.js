// RETURN 
// O "return" serve para retornar o valor de uma função

function soma(x, y){
    return x + y
}

console.log(soma(3,4))

function criaMultiplicador(multiplicador){
    function multiplicacao(n){
        return n * multiplicador // Esse "return" irá retornar o valor da função "multiplicacao()" para a função "criaMultiplicador()"
    }
    return multiplicacao //Esse return irá retornar o valor da função "criaMultiplicador()" para onde quer que ela seja chamada. 
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)

console.log(duplica(10)) // 20
console.log(triplica(10))// 30