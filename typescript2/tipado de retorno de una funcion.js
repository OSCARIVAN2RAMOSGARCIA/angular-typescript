"use strict";
(() => {
    const sumar = (a, b) => a + b;
    const nombre = () => 'Hola Oscar';
    const obtenerSalario = () => {
        return new Promise((resolve, reject) => {
            resolve('Oscar');
        });
    };
    obtenerSalario().then(a => console.log(a.toUpperCase()));
})();
