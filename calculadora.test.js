const Calculadora = require("./js/calculadora");

var calculadora = new Calculadora();

describe("funcion suma", () => {
  test("suma numeros positivos enteros", () => {
    expect(calculadora.suma(12, 34)).toBe(46);
  });
  test("suma numeros positivos decimales", () => {
    expect(calculadora.suma(12.3, 34.7)).toBe(47);
  });
  test("suma en la cual un numero es cero", () => {
    expect(calculadora.suma(12, 0)).toBe(12);
  });
});
describe("funcion resta", () => {
  test("resta numeros positivos enteros", () => {
    expect(calculadora.resta(12, 34)).toBe(-22);
  });
  test("resta numeros positivos decimales", () => {
    expect(calculadora.resta(12.3, 2.3)).toBe(10);
  });
  test("resta un numero es cero", () => {
    expect(calculadora.resta(12, 0)).toBe(12);
  });
});
describe("funcion producto", () => {
  test("producto numeros positivos enteros", () => {
    expect(calculadora.producto(2, 34)).toBe(68);
  });
  test("producto numeros positivos decimales", () => {
    expect(calculadora.producto(2.1, 3.4)).toBe(7.14);
  });
  test("producto un numero es cero", () => {
    expect(calculadora.producto(12, 0)).toBe(0);
  });
});
describe("funcion cociente", () => {
  test("cociente numeros positivos exacta", () => {
    expect(calculadora.cociente(34, 2)).toBe(17);
  });
  test("cociente numeros positivos no exacta", () => {
    expect(calculadora.cociente(14, 4)).toBe(3.5);
  });
  test("cociente un dividendo es cero", () => {
    expect(calculadora.cociente(0, 2)).toBe(0);
  });
  test("cociente un divisor es cero", () => {
    expect(calculadora.cociente(2, 0)).toBe(Infinity);
  });
});
describe("funcion raizCuadrada", () => {
  test("raiz cuadrada de un numero entero positivo", () => {
    expect(calculadora.raizCuadrada(4)).toBe(2);
  });
  test("raiz cuadrada de un numero decimal", () => {
    expect(calculadora.raizCuadrada(1.8)).toBe(1.341640786499874);
  });
  test("raiz cuadrada de cero", () => {
    expect(calculadora.raizCuadrada(0)).toBe(0);
  });
});

describe("Potencia", () => {
  test("Potencia de un numero entero positivo", () => {
    expect(calculadora.potencia(4, 2)).toBe(16);
  });
  test("Potencia con un numero decimal", () => {
    expect(calculadora.potencia(1.5, 4)).toBe(5, 0625);
  });
  test("Potencia el exponente es cero", () => {
    expect(calculadora.potencia(4, 0)).toBe(1);
  });
  test("Potencia la base es cero", () => {
    expect(calculadora.potencia(0, 6)).toBe(0);
  });
  test("Potencia base y exponente es cero", () => {
    expect(calculadora.potencia(0, 0)).toBe(1);
  });
});
