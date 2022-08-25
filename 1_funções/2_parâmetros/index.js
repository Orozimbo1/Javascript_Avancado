// PARÂMETROS DA FUNÇÃO

function funcao(){
    console.log('Olá!!')
    console.log(arguments)// Não existe em arrow function
}
funcao('valor', 1, 2, 3, 4) // Não vai retornar nenhum dos valores pois a função não tm parâmetros. Mas o js armazenará em um um objeto chamado "arguments"

function soma(){
    let total = 0
    for(let argumento of arguments){
        total += argumento
    }
    console.log(total)
}
soma(1, 2, 3, 4, 5, 5, 6, 6)