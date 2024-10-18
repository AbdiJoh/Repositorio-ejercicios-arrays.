function encontrarObjeto(arreglo, propiedad, valor) {
    return arreglo.find(objeto => objeto[propiedad] === valor);
}

const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Pedro", edad: 20 }
];
console.log(encontrarObjeto(personas, "nombre", "Ana"));