import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"


const diretor = new Diretor('Luis', 10000, 123456)
diretor.cadastrarSenha('123456')
const gerente = new Gerente('Mah', 5000, 123465)
gerente.cadastrarSenha('123')

const cliente = new Cliente('Novo', 1231234, '123456')


const estaLogado = SistemaAutenticacao.login(diretor, '123456')
const estaLogado1 = SistemaAutenticacao.login(gerente, '123')
const clienteLogado = SistemaAutenticacao.login(cliente, '123456')


console.log(estaLogado1)
console.log(estaLogado)
console.log(clienteLogado)
// console.log(estaLogado1)


