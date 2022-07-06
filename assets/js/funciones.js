//funciones tradicionales
function saludar(){
    console.log('Hola mundo');
}

const saludar2 = function(nombre){
    console.log('Hola ' + nombre);
}

//Funciones de flecha

const saludarFlecha = () => {
    console.log('Hola flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}

// saludar();
// saludar2('Bryan');
// saludarFlecha();
// saludarFlecha2('Alexander');


//Detalles sobre los return 

function suma(a,b){

    return a + b;
}

console.log(suma(3, 9));

//Return con funciones de flecha

const suma2 = (a, b) => {
    return a + b;
}

console.log(suma2(10, 4));



const suma3 =  (a,b) => a +b;
console.log(suma3(7, 9));

function getAleatorio(){
    return Math.random();
}
//Ejercicio

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());