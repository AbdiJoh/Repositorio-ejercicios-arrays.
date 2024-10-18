function invertirArreglo(arreglo) {
    let invertido = [];
    for (let i = arreglo.length - 1; i >= 0; i--) {
        invertido.push(arreglo[i]);
    }
    return invertido;
}

const arreglo = [100, 200, 300, 400, 500];
console.log(invertirArreglo(arreglo));