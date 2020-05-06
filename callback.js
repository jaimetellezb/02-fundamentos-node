//Un callback es una función que se ejecuta después de que algo sucede

// la función que está dentro de setTimeout() se conoce como callback
// es una función que se va ejecutar luego de 3 segundos
// setTimeout(function() {
//     console.log('Hola Mundo');
// }, 3000);

// para reemplazarla a una función de flecha
// el 'Hola mundo' es un callback
// setTimeout(() => {
//     console.log('Hola Mundo');
// }, 3000);

let getUserById = (id, callback) => {

    let user = {
        name: 'Jaime',
        id
        // también se puede 
        // id: id pero con ES6 no es necesario si el parámetro es igual a la propiedad
    }

    // colocar condición por si no existe uusario
    if (id === 20) {
        // ejecutar un callback
        callback(`El usuario con id ${id} no existe en la BD`);
    } else {
        //ejecutar el callback
        callback(null, user);
    }


}

// llamar la función 
// recibe el id y una callback que es una función, en este caso de flecha
// que recibe un usuario y un error
getUserById(10, (err, user) => {
    //si hay error retorna el error
    if (err) {
        return console.log(err);
    }
    // este console lo que imprime es la cadena y el objeto en json
    console.log('Usuario de base de datos', user);
});