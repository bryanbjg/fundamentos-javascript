
//Forma de declarar un arreglo.
// const arr = new Array(10);



// Otra forma de declarar arreglos.

let videoJuegos = ['Call Of Duty', 'Need For Speed', 'NBA 2K22'];
console.log({videoJuegos});


//Imprimiendo cualquier posicion del arreglo

console.log(videoJuegos[2]);



//EJERCICIO


//Imprimir el ultimo arreglo y mostrar la ultima posicion del mismo.

let arregloDeCosas = [

    'Clash Royale',
    1234,
    'Mobile Legends',
    ['The Last Of Us', 'God Of War', 'Clash Of Clans']
]

console.log(arregloDeCosas[3][2]);



//Obtener largo del arreglo

let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length);

//Obtener ultimo elemento con el length

let ultimo = juegos[juegos.length -1 ];
console.log([{ultimo}]);

//Usando forEach

juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

//Agregar juegos
let nuevaLongitud = juegos.push('Mobile Legend');
console.log({nuevaLongitud, juegos});

//Agregar juego al principio del arreglo
nuevaLongitud = juegos.unshift('MLB 2022');
console.log({nuevaLongitud, juegos});


//Borrar juego 

let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

//Borrar juego de cualquier posicion

let posicion = 1;

let juegosBorrados = juegos.splice(posicion, 1);
console.log({juegosBorrados, juegos});

//Mostrar el indice del arreglo

let indice = juegos.indexOf('Chrono');
console.log({indice});