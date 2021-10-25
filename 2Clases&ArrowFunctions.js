//Nivel 1 Ejercicio 1
// Muestra para la consola el resultado de una arrow function autoinvocable que sume dos números.
console.log('Nivel 1 Ejercicio 1-------------------------------------------');

((num1, num2) => {
    console.log((num1 + num2))
})(5, 6);

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
        throw new Error("You cannot create an instance of     Abstract Class");
    }
}

//Metodo  de la clase abstracta
Empleado.prototype.display = function() {
    return "Employee name is: " + this.empName;
}

//Subclase1
function Freelancer(fullName) {
    this.empName = fullName;
}

function ComunityManager(fullName) {
    this.empName = fullName;
}
//Extendiendo las subclases
Freelancer.prototype = Object.create(Empleado.prototype);
ComunityManager.prototype = Object.create(Empleado.prototype);

//Instanciando

const freenlacer = new Freelancer("Roberto Gomez")
const comMan = new ComunityManager("Daniel Perez")

console.log(freenlacer.display())
console.log(comMan.display())