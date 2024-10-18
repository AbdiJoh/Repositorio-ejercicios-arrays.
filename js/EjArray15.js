function buscarIndice(arreglo, valor) {
    return arreglo.indexOf(valor);
}

const numeros = [10, 20, 30, 40];
console.log(buscarIndice(numeros, 30));
console.log(buscarIndice(numeros, 50));