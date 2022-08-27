/**
 *  FUNÇÃO RECURSIVA
 *  É uma função que tem a capacidade de chamar ela mesmo, 
 *  funcionando similar à uma estrutura de repetição 
 */

function recursiva(max){
    console.log(max)
    if(max >= 10) return
    max++
    recursiva(max)
}

recursiva(0)