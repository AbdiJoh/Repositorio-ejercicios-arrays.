function obtenerNombres(arreglo) {
    return arreglo.map(objeto => objeto.nombre);
}

const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Pedro", edad: 20 }
];
console.log(obtenerNombres(personas));