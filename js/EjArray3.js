function Promedio(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma / arreglo.length;
}

const numeros = [10,20,30,40];
console.log(Promedio(numeros));