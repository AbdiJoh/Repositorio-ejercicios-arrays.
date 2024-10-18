function agruparPorDecada(arreglo) {
    return arreglo.reduce((grupos, persona) => {
        const decada = Math.floor(persona.edad / 10) * 10;
        if (!grupos[decada]) {
            grupos[decada] = [];
        }
        grupos[decada].push(persona);
        return grupos;
    }, {});
}

const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 35 },
    { nombre: "Pedro", edad: 42 }
];
console.log(agruparPorDecada(personas)); 