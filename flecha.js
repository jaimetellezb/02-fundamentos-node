//Función normal en JavaScript
function sumar(a, b) {
    return a + b;
}

console.log(sumar(10, 20));

//Función de flecha
let sumarFlecha = (a, b) => {
    return a + b;
}

console.log(sumarFlecha(10, 20));

// para las funciones de flecha si la función retorna una sola línea se
// puede hacer de la siguiente manera
let sumarFlecha2 = (a, b) => a + b;

console.log(sumarFlecha2(10, 20));


//Ejemplo función normal y pasarla a función de flecha
function saludar() {
    return 'Hola mundo';
}

console.log(saludar());

// Función de flecha
let saludarFlecha = () => 'Hola mundo';
console.log(saludarFlecha());

//Otro Ejemplo función normal y pasarla a función de flecha
// pero esta vez la función tiene 1 único argumento
function saludar2(nombre) {
    return `Hola ${nombre}`;
}
console.log(saludar2('Jaime'));

// Función Flecha, para este caso se puede indicar solo el 
// nombre del argumento sin necesidad de los paréntesis
let saludar2Flecha = nombre => `Hola ${nombre}`;
console.log(saludar2Flecha('Jaime'));


// transformar el siguiente getNombre() a una función de flecha
// que está dentro de un objeto
let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        // el valor del this dentro de una función de flecha
        // apunta al valor que tenga el objeto this
        // fuera de la función, en este caso es objeto vacío {}
        // en JS el objeto global al que apuntan es window
        // para node es global(es algo parecido a window)
        // para este caso como se necesita el valor del this
        // entonces no usar función de flecha sino usar getNombre()
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

console.log(deadpool.getNombre());