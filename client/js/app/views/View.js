class View {

    constructor(elemento) {
        this.elemento = elemento
    }

    template() {
        throw new Error('O método deve ser implementado')
    }

    update(model) {
        this.elemento.innerHTML = this.template(model)
    }
}