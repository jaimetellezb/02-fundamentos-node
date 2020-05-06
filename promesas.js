//Las promesas nos permiten ejecutar un trabajo síncrono o asíncrono y después
// realizar un trabajo en particular
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

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe un empleado con el id ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}




let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontró un salario para el empleado ${empleado.nombre}`);
        } else {
            let res = {
                nombre: empleado.nombre,
                salario: salarioDB.salario
            }
            resolve(res);
        }
    });
}

getEmpleado(3).then(empleado => {
        return getSalario(empleado);
    })
    .then(resp => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    })
    .catch((err) => console.log(err));