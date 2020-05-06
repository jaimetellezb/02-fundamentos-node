// Crear 2 arreglos 
let empleados = [{
    id: 1,
    nombre: 'Jaime'
}, {
    id: 2,
    nombre: 'Yuliana'
}, {
    id: 3,
    nombre: 'Pepito'
}]

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}]

/**
 * Función asíncrona async, lo cual indica que va retornar una promesa
 * 
 * @param {*} id 
 */
let getEmpleado = (id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el id ${id}`);
    } else {
        return empleadoDB;
    }
}



/**
 * Función asíncrona con async
 * @param {} empleado 
 */
let getSalario = async(empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No se encontró un salario para el empleado ${empleado.nombre}`);
    } else {
        let res = {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        }
        return res;
    }
}

/**
 * Función asíncrona para utilizar promesas
 * @param {*} id 
 */
let getInformacion = async(id) => {

    let empleado = await getEmpleado(id);
    let respuesta = await getSalario(empleado);

    return `${empleado.nombre} tiene un salario de ${respuesta.salario}`;
}

getInformacion(2)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));