export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error('Não instanciar um objeto do tipo conta diretamente -> Classe Abstrata')
        }

        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia

    }
    set cliente(novovalor) {
        if (novovalor instanceof Cliente) {
            this._cliente = novovalor
        }
    }

    get cliente() {
        return this._cliente
    }

    get saldo() {
        return this._saldo
    }

    sacar(valor) {
        throw new Error('O método sacar é abstrato')
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado
            return valorSacado
        }
        return 0
    }

    depositar(valor) {
        this._saldo += valor
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}