function eliminarDuplicados(arreglo) {
    return [...new Set(arreglo)];
}

const numeros = [1, 2, 2, 3, 4, 4, 5];
console.log(eliminarDuplicados(numeros));