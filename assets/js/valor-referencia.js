let juan = { nombre: 'Juan'};
let ana = {...juan};
ana.nombre = 'Ana';

console.log({juan, ana});


const cambiarNombre = ({...persona}) =>{
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiarNombre(peter);

console.log({peter, tony});


//

const frutas = ['Manzana', 'Uva', 'Sandia'];


console.time('Slice');
const otrasFrutas2 = frutas.slice();
console.timeEnd('Slice');

console.time('Spread');
const otrasFrutas = [...frutas];
console.timeEnd('Spread');

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});