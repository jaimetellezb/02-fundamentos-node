let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function() {
            return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
        }
        /*getNombre: function() {
            return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
        }*/
};

//console.log(deadpool.getNombre());

// obtener los valores de forma normal
//let nombre = deadpool.nombre;
//let apellido = deadpool.apellido;
//let poder = deadpool.poder;

// Obtener los valores con Destructuración
// yo quiero el nombre, apellido y poder del objeto deadpool

//let { nombre, apellido, poder } = deadpool;

// el nombre de la variable se puede cambiar 
// se dice que nombre del objeto deadpool ahora se va llamar primerNombre
// nombre: primerNombre
let { nombre: primerNombre, apellido, poder } = deadpool;

console.log(primerNombre, apellido, poder);