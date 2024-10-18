function buscarElemento(arreglo, valor) {
    return arreglo.includes(valor);
}

const arreglo = [1, 2, 3, 4, 5];
console.log(buscarElemento(arreglo, 3));
console.log(buscarElemento(arreglo, 6));
