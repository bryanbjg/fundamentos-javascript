const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    }

};

console.log(personaje);
console.log('Nombre:', personaje.nombre);
console.log('Edad:', personaje.edad);

//Ejercicio 

console.log('No.Trajes:', personaje.trajes.length);

//Mas detalles

//Elimando

delete personaje.edad;
console.log(personaje);

personaje.casado =  true;

//Pares de valores

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

//Utilizando el freeze

Object.freeze(personaje);

personaje.nombre = 'Sr. Stark';
console.log(personaje);


//Obteniendo las propiedadess en un array

const propiedades = Object.getOwnPropertyNames(personaje);

//Obteniendo los valores

const valores = Object.values(personaje);
console.log({propiedades, valores});