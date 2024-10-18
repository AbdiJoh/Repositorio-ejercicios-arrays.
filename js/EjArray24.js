function reemplazarNegativos(arreglo) {
    return arreglo.map(num => num < 0 ? Math.abs(num) : num);
}

const numeros = [-1, 2, -3, 4, -5];
console.log(reemplazarNegativos(numeros));