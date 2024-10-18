function ordenarNumeros(arreglo) {
    return arreglo.sort((a, b) => a - b);
}

const numeros = [4, 2, 7, 1, 5];
console.log(ordenarNumeros(numeros));