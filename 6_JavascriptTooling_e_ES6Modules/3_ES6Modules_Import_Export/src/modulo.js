export const nome = 'Matheus'
export const sobrenome = 'Orozimbo'
export const idade = 25

export default function soma(x, y) {
    return x + y
}

export class Pessoa{
    constructor(nome, sobrenome, idade) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }
}