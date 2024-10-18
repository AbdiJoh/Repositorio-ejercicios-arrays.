function sonTodosMayores(arreglo, n) {
    return arreglo.every(num => num > n);
}

const numeros = [10, 20, 30, 40];
console.log(sonTodosMayores(numeros, 5));
console.log(sonTodosMayores(numeros, 25));