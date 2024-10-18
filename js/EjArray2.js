function findMayor (arreglo) {
    let  mayor = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }
    return mayor;
}

const numeros = [6, 8, 14, 0.98, -14.2];
console.log(findMayor(numeros));
