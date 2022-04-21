'use strict'

const outputValorAnterior = document.getElementById('primerValor');
const outputValorActual = document.getElementById('segundoValor');
const numeros = document.querySelectorAll('.boton_numero');
const operadores = document.querySelectorAll('.boton_signo');

const output = new Output(outputValorAnterior, outputValorActual);

numeros.forEach(boton => {
    boton.addEventListener('click', () => output.añadirNumero(boton.innerHTML));
});

operadores.forEach(boton => {
    boton.addEventListener('click', () => output.operar(boton.value))
});
