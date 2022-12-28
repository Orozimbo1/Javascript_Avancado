import * as MeuModulo from './modulo'
import qualquerNome from './modulo'

const nome = 'Joao'
const usuario = MeuModulo.nome + ' ' + MeuModulo.sobrenome + ', ' + MeuModulo.idade + ' anos.'

const pessoa = new MeuModulo.Pessoa('Matheus', 'Orozimbo', 25)

console.log(nome)
console.log(usuario)
console.log(qualquerNome(5, 5))
console.log(pessoa)