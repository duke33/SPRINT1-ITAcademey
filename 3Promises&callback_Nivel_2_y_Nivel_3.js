//Nivel 2 - Ejercicio 1 Dados los objetos employees y Salas, crea una arrow function getEmployee que devuelva una Promise efectuando la búsqueda en el objeto por su id. 
//Nivel 2 - Ejercicio 2 Crea otra arrow function getSalary que reciba como parámetro un objeto employee y devuelva su salario.
console.log('Nivel 2 Ejercicio 1 y 2-------------------------------------------');

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
            resolve(employeeFound.name)
        } else {
            reject(new Error('promise rejected!')) //TODO acomodar esto new error?
        }
    })

}

const getSalary = (salariesArray, id) => {
    return new Promise((resolve, reject) => {

        const salaryFound = salariesArray.find(element => element.id === id);

        if (salaryFound) {
            resolve(salaryFound.salary)
        } else {
            reject(new Error('promise rejected!'))
        }
    })

}

getEmployee(employees, 2).then((result) => console.log(result)).catch((e) => { console.log(e.message) })
getSalary(salaries, 2).then((result) => console.log(result)).catch((e) => { console.log(e.message) })

//Nivel 2 - Ejercicio 3 Invoca la primera función getEmployee y después getSalary anidando la ejecución de las dos promises.
//*************** Algo esta mal en el enunciado, probablemete en lugar de anidar diga negar, como reject the promise
console.log('Nivel 2 Ejercicio 3-------------------------------------------');
getEmployee(employees, 100).then(getSalary(salaries, 100)).catch((e) => { console.log(e) })