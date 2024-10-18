function palabrasLargas(arreglo, n) {
    return arreglo.filter(palabra => palabra.length > n);
}

const palabras = ["casa", "automóvil", "bicicleta", "perro"];
console.log(palabrasLargas(palabras, 5));