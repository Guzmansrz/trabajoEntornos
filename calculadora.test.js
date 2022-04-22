const calculadora = require("./calculadora");

describe("funcion suma", () => {
  test("suma numeros positivos enteros", () => {
    expect(calculadora.suma(12, 34)).toBe(46);
  });
  test("suma numeros positivos decimales", () => {
    expect(calculadora.suma(12.3, 34.7)).toBe(47);
  });
  test("suma un numero es cero", () => {
    expect(calculadora.suma(12, 0)).toBe(12);
  });
});
describe("funcion resta", () => {
  test("resta numeros positivos enteros", () => {
    expect(calculadora.resta(12, 34)).toBe(46);
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
    expect(calculadora.cociente(2, 0)).toBe("No se puede dividir por cero");
  });
});
