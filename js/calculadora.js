"use strict";

class Calculadora {
  suma(num1, num2) {
    return num1 + num2;
  }

  resta(num1, num2) {
    return num1 - num2;
  }

  producto(num1, num2) {
    return num1 * num2;
  }

  cociente(num1, num2) {
    return num1 / num2;
  }

  potencia(num1,num2){
    return Math.pow(num1,num2);
  }

  raiz(num1){
    return Math.sqrt(num1);
  }
};

module.exports=Calculadora;
