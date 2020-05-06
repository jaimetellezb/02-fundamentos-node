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

let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe un empleado con el id ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}

// getEmpleado(1, (err, empleado) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(empleado);
// });


// {
//     nombre: 'Jaime',
//     salario: 2000
// }

//No se encontró un salario para el empleado PEPITO
let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No se encontró un salario para el empleado ${empleado.nombre}`);
    } else {
        let res = {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        }
        callback(null, res);
    }
}

// let emp = { id: 10, nombre: 'Jaime' };
// getSalario(emp, (err, empleado) => {
//     if (err) return console.log(err);
//     console.log(empleado);
// });


getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado);

    getSalario(empleado, (err, resp) => {
        if (err) return console.log(err);
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    });
});