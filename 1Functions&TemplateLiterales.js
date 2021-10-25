//Nivel 1 Ejercicio 1 Crea una función que muestre por consola el nombre de usuario al invocarla pasándole el nombre como parámetro.
console.log('Nivel 1 Ejercicio 1-------------------------------------------')

const printName = (name) => {
    console.log(name)
}
printName("Mariano")

//Nivel 2 Ejercicio 1 y 2 Muestra por consola el nombre y apellidos del usuario mediante template literales, guardándolos en variables y referenciándolas en la impresión del mensaje. Invoca una función que devuelva un valor mediante template literales.
console.log('Nivel 2 Ejercicio 1 y 2-------------------------------------------')

const firstName = "Mariano"
const lastName = "Farace"

const firstAndLastName = (firstNameArg, lastNameArg) => {
    console.log(`First name is ${firstNameArg}, last name is ${lastNameArg}`)
}

firstAndLastName(firstName, lastName)

//Nivel 3 Ejercicio 1 Crea una matriz de diez funciones y rellena mediante un bucle de forma que cada función cuente del 0 al 9 para la consola. Invoca cada función del array iterativamente. Deberá mostrarse por consola la cuenta del 0 al 9 diez veces.
console.log('Nivel 3 Ejercicio 1-------------------------------------------')
const countDown = () => {
    console.log('Countdown executed')
    for (let i = 0; i < 10; i++) {
        console.log(i)
    }
}

const arrayOfCountdowns = Array(10).fill(countDown)

arrayOfCountdowns.forEach((func) => {
    func();
});

//Nivel 3 Ejercicio 2 Crea una función anónima autoinvocable igualada a una variable que muestre por consola el nombre del usuario recibido como parámetro.
console.log('Nivel 3 Ejercicio 2-------------------------------------------');


// eslint-disable-next-line no-unused-vars
const anonymousFunction = (function(name) {

    console.log(name)
})("Omar aprobame!!");