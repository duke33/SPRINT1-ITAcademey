//Nivel 1 - Ejercicio 1
// Crea una función que devuelva una Promise que invoque la función resolve () o reject () que recibe. Invócala pasándole las dos funciones de forma que impriman un mensaje diferente dependiendo de si la Promise se resuelve o no.

console.log('Nivel 1 Ejercicio 1-------------------------------------------');

const fun = (boolean) => new Promise((resolve, reject) => {
    if (boolean) {
        resolve(console.log('promise resolved'))
    } else {
        reject(new Error('promise rejected')) //TODO acomodar esto No confundas reject con catch!
    }
})

fun(true) //promise resolved
fun(false).catch((e) => { console.log(e.message) }) //promise rejected //TODO acomodar esto

//Nivel 1 - Ejercicio 2 Crea una arrow function que reciba un parámetro y una función callback y le pase a la función un mensaje u otro (que se imprimirá para consola) en función del parámetro recibido.
console.log('Nivel 1 Ejercicio 2-------------------------------------------');

const callback = (y) => {
    if (y) {
        console.log('value is true')
    } else { console.log('value is false') }
}

const fun2 = (x, callback) => {
    callback(x)
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

const getEmployee = (employeesArray, id) => {
    return new Promise((resolve, reject) => {

        const employeeFound = employeesArray.find(element => element.id === id);

        if (employeeFound) {
            resolve(employeeFound)
        } else {
            reject(new Error('promise rejected')) //TODO acomodar esto new error?
        }
    })

}

const getSalary = (salariesArray, employee) => {
    return new Promise((resolve, reject) => {

        const salaryFound = salariesArray.find(element => element.id === employee.id);

        if (salaryFound) {
            resolve(salaryFound.salary)
        } else {
            reject(new Error('promise rejected'))
        }
    })

}


getEmployee(employees, 3).then((result) => console.log("Result of calling getEmployee(employees, 3): ", result)).catch((e) => { console.log(e) })
getSalary(salaries, employees[0]).then((result) => console.log("Result of calling getSalary(salaries, employees[0]): ", result)).catch((e) => { console.log(e) })

//Nivel 2 - Ejercicio 3 Invoca la primera función getEmployee y después getSalary anidando la ejecución de las dos promises.
getEmployee(employees, 1).then((result) => getSalary(salaries, result)).then((result2) => console.log("Chained promises result: ", result2)).catch((e) => { console.log(e) })