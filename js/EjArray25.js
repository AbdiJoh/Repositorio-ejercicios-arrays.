function esArregloVacio(arreglo) {
    return Array.isArray(arreglo) && arreglo.every(() => false);
}

console.log(esArregloVacio([]));  
console.log(esArregloVacio([1, 2]));