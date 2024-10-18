function contarOcurrencias(arreglo, valor) {
    return arreglo.reduce((contador, actual) => actual === valor ? contador + 1 : contador, 0);
}

const elementos = [1, 2, 2, 3, 3, 3, 2, 5, 1, 1, 1, 3, 2, 2, 2, 1];
console.log(contarOcurrencias(elementos, 2));