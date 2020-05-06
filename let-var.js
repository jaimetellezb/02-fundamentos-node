// las variables con var se pueden reinicializar n cantidad de veces
// siempre tendrá la última asignación

// las variables con let no se pueden volver a inicializar 
let nombre = 'wolverine';

if (true) {
    // aquí si permite crear otra porque pertenecen a scopes diferentes 
    let nombre = 'Magneto';
}

console.log(nombre);

// otra diferencia son los ciclos
let i = 'Hola Mundo';

for (let i = 0; i <= 5; i++) {
    console.log(`i: ${i}`); // templates literales
}

console.log(i);