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
            reject(new Error('promise rejected'))
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