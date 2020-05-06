let nombre = 'Deadpool';
let real = 'Wade Winston';

//Los templates literales nos sirven para mejorar la concatenación de cadenas
// se hace dentro de back tips `` y dentro se pueden colocar variables
// con ${nombre_variable}
// el siguiente ejemplo hacen lo mismo
console.log(nombre + ' ' + real);
console.log(`${nombre} ${real}`);

let nombreCompleto = nombre + ' ' + real;
let nombreTemplate = `${nombre} ${real}`;

console.log(nombreCompleto === nombreTemplate);

function getNombre() {
    return `${nombre} ${real}`;
}

console.log(`El nombre de ${getNombre()}`);