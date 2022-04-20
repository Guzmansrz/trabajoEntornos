'use strict'
module.exports = { suma, resta, multiplicacion, division };

class Calculadora{

    constructor(num1,num2,operation,result){
        this.num1 = num1;
        this.num2 = num2;
        this.operation = operation;
        this.result = result;
    }

    suma(num1,num2){
        return num1 + num2;
    }

    resta(num1,num2){
        return num1 - num2;
    }

    producto(num1,num2){
        return num1 * num2;
    }

    cociente(num1,num2){
        return num1/num2;
    }
}