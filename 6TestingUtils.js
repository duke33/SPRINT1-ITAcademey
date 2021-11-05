const notANumber = (n1, n2) => {
    if (typeof n1 != "number" || typeof n2 != "number") {
        throw new Error("Debes ingresar numeros")
    }
}
const sumar = (n1, n2) => {
    notANumber(n1, n2)
    return n1 + n2
}

const restar = (n1, n2) => {
    notANumber(n1, n2)
    return n1 - n2
}

const dividir = (n1, n2) => {
    notANumber(n1, n2)
    if (n2 == 0) {
        throw new Error("No se puede dividir un numero por 0")
    }
    return n1 / n2
}

const multiplicar = (n1, n2) => {
    notANumber(n1, n2)
    return n1 * n2
}

// Nivel 1- Ejercicio 2 Crea una función asíncrona que reciba un id de empleado e imprima por pantalla el nombre del empleado y su salario, usando las funciones que has definido en el ejercicio anterior.

const newGetEmployee = (id, JSONfile) => {
    return new Promise((resolve, reject) => {

        const employeeFound = JSONfile.employees.find(element => element.id === id);

        if (employeeFound) {
            resolve(employeeFound)
        } else {
            reject(new Error('Employee Not Found'))
        }
    })

}


const newGetSalary = (employee, JSONfile) => {
    return new Promise((resolve, reject) => {

        const salaryFound = JSONfile.salaries.find(element => element.id === employee.id);

        if (salaryFound) {
            resolve(salaryFound.salary)
        } else {
            reject(new Error('Salary not found'))
        }
    })

}

const newNameAndSalary = async(id, JSONfile) => {
    try {
        const employeeFound = await newGetEmployee(id, JSONfile)
        const salaryFound = await newGetSalary(employeeFound, JSONfile)
        const output = {
            name: employeeFound.name,
            salary: salaryFound
        }

        return output

    } catch (e) { console.log(e.message) }

}

module.exports = {
    sumar,
    restar,
    dividir,
    multiplicar,
    newGetEmployee,
    newGetSalary,
    newNameAndSalary

}