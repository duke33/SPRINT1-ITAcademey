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
const employeeFound = await getEmployee(employeesArray, id)
const salaryFound = await getSalary(salariesArray, employeeFound)
const outoput = {
    name: employeeFound.name,
    salary: salaryFound
}

console.log(outoput)
}
catch { error => console.log(error.message) }
}
nameAndSalary(1, employees, salaries)


//Nivel 2- Ejercicio 1 Crea una nueva función asíncrona que llame a otra que devuelva una Promise que efectúe su función resolve() después de 2 segundos de su invocación.

/*
PREGUNTA para OMAR, tiene algun sentido en la siguiente funcion, usar reject? No entiendo como se podria implementar!!
*/
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(console.log('Boooo!'));
    }, 2000);
});

const asyncCaller = async(aPromise) => {

    return await aPromise
}
asyncCaller(myPromise).catch(error => console.log(error.message))