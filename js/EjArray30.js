let personas1 = [
    { nombre: "Daniel", edad: 25 },
    { nombre: "Alison", edad: 34 },
    { nombre: "Martin", edad: 29 },
  ];
  
  let personas2 = [
    { apellido: "Martinez", ciudad: "Chicago" },
    { apellido: "Zuñiga", ciudad: "San Diego" },
    { apellido: "Lopez", ciudad: "Seattle" },
    { apellido: "Trejo", ciudad: "San Francisco" },
  ];
  
  let personasCombinadas = personas1.map((persona, index) => ({
    ...persona,
    ...personas2[index],
    nombreCompleto: `${persona.nombre} ${personas2[index].apellido}`,
    direccion: `${personas2[index].ciudad}, ${persona.nombre}, ${personas2[index].apellido}`,
  }));
  
  console.log(personasCombinadas);