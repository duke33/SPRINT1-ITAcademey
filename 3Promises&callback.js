//Nivel 1 - Ejercicio 1
// Crea una función que devuelva una Promise que invoque la función resolve () o reject () que recibe. Invócala pasándole las dos funciones de forma que impriman un mensaje diferente dependiendo de si la Promise se resuelve o no.

console.log('Nivel 1 Ejercicio 1-------------------------------------------');

const fun = (boolean) => new Promise((resolve, reject) => {
    if (boolean) {
        resolve('promise resolved')
    } else {
        reject(new Error('promise rejected'))
    }
})

fun(true).then(r => console.log(r))
fun(false).catch((e) => { console.log(e.message) }) //promise rejected

//Nivel 1 - Ejercicio 2 Crea una arrow function que reciba un parámetro y una función callback y le pase a la función un mensaje u otro (que se imprimirá para consola) en función del parámetro recibido.
console.log('Nivel 1 Ejercicio 2-------------------------------------------');

const callback = (message) => {
    console.log(message)
}

const fun2 = (x, callback) => {
    let callbackMessage = x ? "Argument was true" : "Argument was false"
    callback(callbackMessage)
}

fun2(true, callback)
fun2(false, callback)

//Nivel 2 - Ejercicio 1 Dados los objetos employees y Salas, crea una arrow function getEmployee que devuelva una Promise efectuando la búsqueda en el objeto por su id. 
//Nivel 2 - Ejercicio 2 Crea otra arrow function getSalary que reciba como parámetro un objeto employee y devuelva su salario.

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Mandrake'
}];
let salaries = [{ id: 1, salary: 4000 }, { id: 2, salary: 1000 }, { id: 3, salary: 2000 }]

const getEmployee = (id) => {
    return new Promise((resolve, reject) => {

        const employeeFound = employees.find(element => element.id === id);

        if (employeeFound) {
            resolve(employeeFound)
        } else {
            reject(new Error('promise rejected'))
        }
    })

}

const getSalary = (employee) => {
    return new Promise((resolve, reject) => {

        const salaryFound = salaries.find(element => element.id === employee.id);

        if (salaryFound) {
            resolve(salaryFound.salary)
        } else {
            reject(new Error('promise rejected'))
        }
    })

}

//Nivel 2 - Ejercicio 3 Invoca la primera función getEmployee y después getSalary anidando la ejecución de las dos promises.
//Nivel 3 - Ejercicio 1 Fija un elemento catch en la invocación del nivel anterior que capture cualquier error y lo muestre por la consola.
getEmployee(1)
    .then(employee => getSalary(employee))
    .then(result2 => console.log("Chained promises result: ", result2))
    .catch(e => console.log(e))