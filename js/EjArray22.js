function eliminarFalsy(arreglo) {
    return arreglo.filter(Boolean);
}

const valores = [0, 1, false, 2, '', 3, null, 'hola'];
console.log(eliminarFalsy(valores));