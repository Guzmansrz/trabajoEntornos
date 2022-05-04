class Output{
    constructor(outputValorAnterior, outputValorActual) {
        this.outputValorActual = outputValorActual;
        this.outputValorAnterior = outputValorAnterior;
        this.calculadora = new Calculadora();
        this.Operacion = undefined;
        this.primerNumero = '';
        this.segundoNumero = '';
        this.signos = {
            suma: '+',
            cociente: '%',
            producto: 'x',
            resta: '-',
            potencia: '^',
            raiz: '√'
        }
    }

    calcular() {
        const primerNumero = parseFloat(this.primerNumero);
        const segundoNumero = parseFloat(this.segundoNumero);
        
        if( isNaN(primerNumero)  || isNaN(segundoNumero) ) return
        this.primerNumero = this.calculadora[this.Operacion](segundoNumero, primerNumero);
       
    }

    operar(tipo) {
        this.Operacion !== 'igual' && this.calcular();
        this.Operacion = tipo;
        this.segundoNumero = this.primerNumero || this.segundoNumero;
        this.primerNumero = '';
        this.imprimirNumeros();
    }

    añadirNumero(numero) {
        if(numero === '.' && this.primerNumero.includes('.')) return
        this.primerNumero = this.primerNumero.toString() + numero.toString();
        this.imprimirNumeros();
    }

    imprimirNumeros() {
        this.outputValorActual.textContent = this.primerNumero;
        this.outputValorAnterior.textContent = `${this.segundoNumero} ${this.signos[this.Operacion] || ''}`;
        
    }
}