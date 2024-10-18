function algunosSonPares(arreglo) {
    return arreglo.some(num => num % 2 === 0);
}

const numeros4 = [1, 3, 5, 6];
console.log(algunosSonPares(numeros4)); 