function SumElementos (arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}

const numeros = [78, 43, 72, 95, 310];
const resultado = SumElementos(numeros);
console.log("La suma es:", resultado);
