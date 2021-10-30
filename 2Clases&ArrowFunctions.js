//Nivel 1 Ejercicio 1
// Muestra para la consola el resultado de una arrow function autoinvocable que sume dos números.
console.log('Nivel 1 Ejercicio 1-------------------------------------------');

let suma = ((num1, num2) => {
    return num1 + num2
})(5, 6);
console.log('suma: ', suma)

//Nivel 2 Ejercicio 1
// Crea una arrow function que, recibiendo un parámetro, devuelva un objeto con un atributo que tenga como valor el parámetro recibido.
console.log('Nivel 2 Ejercicio 1-------------------------------------------');
((clima) => {
    const object = {
        clima
    }
    console.log(object)
    return object
})("soleado");

//Nivel 2 Ejercicio 2 Crea una clase Persona que reciba un parámetro 'nombre' al ser instanciada. La clase incluirá un método dirNom que imprima por consola el parámetro 'nombre'. Invoca el método dirNom desde fuera de la clase.
console.log('Nivel 2 Ejercicio 2-------------------------------------------');

class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    dirNom() {
        console.log(this.nombre)
    }
}

const Terminator = new Persona("Arnold");
Terminator.dirNom()


//Nivel 3 Ejercicio 1 Escribe una function creadora de objetos que haga instancias de una clase abstracta. Invócala con diferentes definiciones.
console.log('Nivel 3 Ejercicio 1-------------------------------------------');
//Clase abstracta

function Empleado() {
    this.empName = "empName";
    if (this.constructor === Empleado) {
        throw new Error("You cannot create an instance of an Abstract Class");
    }
}

const createI = () => {
    return (Object.create(Empleado.prototype, { constructor: { value: Empleado } }))
}

const I1 = createI()
const I2 = createI()

console.log('i1: ', I1)
console.log('i2: ', I2)
console.log('typeof I1 & I2:', typeof I1, "&", typeof I2)