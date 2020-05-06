/**
 * Async Await
 * función asíncrona
 * 
 */

/**
 * con colocar la palabra async antes de los paréntesis
 * devuelve una promesa
 */
let getNombre = async() => {
    //throw new Error('Error en nombre');

    return 'Jaime';
}

/**
 * sería igual a ésto
 */

//  let getNombre = () => {
//     return new Promise((resolve, reject) => {
//         resolve('Jaime');
//     })
//  }

// cualquier error que de la función se va mostrar en el .catch
// si se quiere un error personalizado se debe poner en la función 
// throw new Error()
// getNombre().then(nombre => console.log(nombre))
//     .catch(err => console.log('Error de Async', err));


/**
 * OTRO EJEMPLO
 */

let getNombreAwait = () => {
    return new Promise((resolve, reject) => {
        // va mostrar el nombre después de 3 segundos
        setTimeout(() => {
            resolve('Jaime');
        }, 3000);
    })
}

/**
 * Para usar el await la función debe tener la palabra async
 */
let saludo = async() => {

    /**
     * esto hace que las funciones que devuelven promesas 
     * den la sensación de que es síncrono (en el mismo hilo)
     * el return no se va ejecutar hasta que getNombre() no responda
     * tener cuidado que si no devuelve nada que va quedar pegado
     */
    let nombre = await getNombreAwait();

    return `Hola ${nombre}`;
}

saludo().then(mensaje => console.log(mensaje));