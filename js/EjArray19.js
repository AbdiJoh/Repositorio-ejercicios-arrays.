function sumaAcumulada(arreglo) {
    return arreglo.reduce((suma, num) => suma + num, 0);
}

const numeros5 = [1, 2, 3, 4];
console.log(sumaAcumulada(numeros5)); 