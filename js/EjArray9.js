function filtrarPares(arreglo) {
    return arreglo.filter(num => num % 2 === 0);
}

// Ejemplo:
const numeros4 = [1, 2, 3, 4, 5, 6];
console.log(filtrarPares(numeros4));