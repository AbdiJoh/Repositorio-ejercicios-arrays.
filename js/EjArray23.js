function aplanarArreglo(arreglo) {
    return arreglo.flat();
}

const anidado = [1, [2, 3], [4, 5, [6]]];
console.log(aplanarArreglo(anidado));