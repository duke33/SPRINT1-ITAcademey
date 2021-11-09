//         _   ,_,   _
//        / `'=) (='` \      >>------>  Use "npm run test" or "npm run watch"
//       /.-.-.\ /.-.-.\ 
//       `      "      `                 


//Me imagino que no es la forma mas elegante de darle estilo al codigo con este require, pero no se me ocurrio nada que sea mas practico

const {
    salaries,
    employees,
    getEmployee, //TODO preguntar esto a Omar
    getSalary,
    asyncCaller,
    myPromise
} = require('./4AsyncYawaits')

const { Persona } = require("./2Clases&ArrowFunctions")
const { sumar, restar, multiplicar, dividir } = require("./6TestingUtils")
const funFromPandC = require("./3Promises&callback")
const { newGetEmployee, newGetSalary, newNameAndSalary } = require("./6TestingUtils")

// Nivel 1
// Crea un archivo con las funciones sumar, restar, multiplicar y dividir dos o más operandos. Testea la correcta ejecución de estas funciones.

describe('Operaciones matematicas', () => {
    test('sumar', () => {
        expect(sumar(11, 22)).toBe(33)
        expect(sumar(-11, 22)).toBe(11)
        expect(sumar(0, 22)).toBe(22)
        expect(() =>
            sumar(1, "L")).toThrow("Debes ingresar numeros");

    })
    test('restar', () => {
        expect(restar(33, 22)).toBe(11)
        expect(restar(-11, 22)).toBe(-33)
        expect(restar(0, 22)).toBe(-22)
        expect(() =>
            restar(1, "L")).toThrow("Debes ingresar numeros");
    })
    test('dividir', () => {
        expect(dividir(20, 10)).toBe(2)
        expect(dividir(-20, -10)).toBe(2)
        expect(() =>
            sumar(1, "L")).toThrow("Debes ingresar numeros");
        expect(() =>
            dividir(1, 0)).toThrow("No se puede dividir un numero por 0");
    })
    test('multiplicar', () => {
        expect(multiplicar(20, 0)).toBe(0)
        expect(multiplicar(-20, -10)).toBe(200)
        expect(multiplicar(4, 3)).toBe(12)
        expect(() =>
            multiplicar(1, "L")).toThrow("Debes ingresar numeros");
    })

})


// Crea los test correspondientes para verificar el funcionamiento del ejercicio Async / Await Nivel 1 - Ejercicio 1

describe('Async / Await Nivel 1 - Ejercicio 1', () => {

    test('getEmployee returns the right employee', () => {
        return getEmployee(employees, 1)
            .then(data => { expect(data).toBe(employees[0]) })

    })
    test('getSalary returns the right salary', () => {
        return getSalary(salaries, employees[0])
            .then(data => { expect(data).toBe(salaries[0].salary) })

    })

})


describe('The rest of the exercises ', () => {
    afterEach(() => {
        jest.useRealTimers();
    });

    //Crea los test correspondientes para verificar el funcionamiento del ejercicio Async / Await Nivel 2 - Ejercicio 1
    test('Boooo! is printed to the console on exercise Async / Await Nivel 2 - Ejercicio 1 ', async() => {
        const consoleSpy = jest.spyOn(console, 'log');
        await asyncCaller(myPromise) //TODO por que tengo que poner await adelante para que la promesa se resulva? si ya esta dentro de la funcion asyncCaller!!!!
        expect(consoleSpy).toHaveBeenCalledWith('Boooo!');
    })

    //Crea los tests correspondientes para verificar el funcionamiento del ejercicio Promises & Callbacks Nivel 2 - Ejercicio 3

    test('Get the salary from the employee ', async() => {
        let testResult = await funFromPandC.getEmployee(1)
            .then(employee => funFromPandC.getSalary(employee))
            .then(result2 => { return result2 })

        expect(testResult).toBe(4000)
    })



    //Verifica mediante tests la ejecución del ejercicio Async/Await Nivel 2 Ejercicio 1 utilizando Jest Fake Timers
    test('should invoke callback after timer ends', async() => {

        const toPrint = "Imprime despues de 2 segundos"

        // Enable mocking of native timer functions
        jest.useFakeTimers();

        const consoleSpy2 = jest.spyOn(console, 'log');

        // await asyncCaller(myPromise) Tampoco funciona, porque resuelve la promesa como se espearia si yo no estuviera controlando los timers
        await asyncCaller(toPrint)

        // The callback should not have been called yet                                
        expect(consoleSpy2).not.toHaveBeenCalled();

        // ╔══╗
        // ╚═╗║
        // ─╔╔╝
        // ─╠╣
        // ─╚╝
        // Fast-forward until all timers have been executed
        jest.runAllTimers(); //Deberia hacer transcurrir los segundos necesarios para el timer pase y asynCaller haga lo que tiene que hacer, sin embargo por consola puedo ver que la promesa no se ha resuelto para cuando termina el test.


        // Assert successfully without having to wait for the 10 second delay
        expect(consoleSpy2).toHaveBeenCalledWith(toPrint)
    });

})






//Nivel 2
jest.mock('./2Clases&ArrowFunctions');

describe('Nivel 2', () => {
    beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
        Persona.mockClear();
    })

    // Crea un mock que compruebe las llamadas al constructor de la clase Persona ya su método decirNúmero en el ejercicio Clases & Arrow Functions - Nivel 2 Ejercicio 2
    test('Class constructor and Methods are called', () => {
        const unaPersona = new Persona("Andres"); //TODO esto lo podria mejorar
        expect(Persona).toHaveBeenCalledTimes(1);

        unaPersona.dirNom()

        const mockPersonaInstance = Persona.mock.instances[0];
        const mockDirNom = mockPersonaInstance.dirNom;

        expect(mockDirNom).toHaveBeenCalledTimes(1);


    });

    //Verifica mediante test el ejercicio Clases & Arrow Functions Nivel 3 - Ejercicio 1 .

    test('Retuns error.message ', async() => {
        const consoleSpy = jest.spyOn(console, 'log');
        await funFromPandC.getEmployee(156)
            .then(employee => funFromPandC.getSalary(employee))
            .then(result2 => console.log("Chained promises result: ", result2))
            .catch(e => console.log(e.message))

        expect(consoleSpy).toHaveBeenCalledWith("promise rejected");

    })
})


//Nivel 3
//Rehacer el ejercicio Async / Await Nivel 1 accediendo a un archivo externo JSON. Crea tests que demuestren la correcta ejecución del ejercicio haciendo un mock  del archivo JSON.
describe('Nivel 3 Parte 1', () => {

    const JSONmock = jest.fn();

    JSONmock.mockReturnValue(({
        "employees": [{
            "id": "1",
            "name": 'Linux Torvalds'
        }, {
            "id": "2",
            "name": 'Bill Gates'
        }, {
            "id": "3",
            "name": 'Mandrake'
        }],
        "salaries": [{ "id": "1", "salary": "4000" }, { "id": "2", "salary": "1000" }, { "id": "3", "salary": "2000" }]
    }))





    test("newGetEmployee returns the right employee", async() => {

        const employeeFound = await newGetEmployee("1", JSONmock());
        expect(employeeFound).toEqual({ "id": "1", "name": "Linux Torvalds" });
    });

    test("newGetSalary returns the right employee", async() => {

        const salary = await newGetSalary({ "id": "1", "name": "Linux Torvalds" }, JSONmock());
        expect(salary).toEqual("4000");
    });

    test("newNameAndSalary returns the final object", async() => {

        expect(await newNameAndSalary("1", JSONmock())).toEqual({ "name": "Linux Torvalds", "salary": "4000" });
    })

});


// Utilizando como base el ejercicio Async/Await Niveles 2 y 3 , crea un test que fuerce errores de funcionamiento y verifique que el error lanzado por la función es el esperado.

describe('Nivel 3 Parte 2', () => {

    test('force error by passing no argument', async() => {

        //No le estoy pasando argumento, tendria que tirar error, se que la funcion asyncCaller esta tirando el error y el catch de asyncCaller lo esta logueando por consola por su nombre, sin embargo no lo estoy pudiendo cojer aqui en el test. No se que hacer ya.
        expect.assertions(1); //al menos detecta que hay una assertion
        expect(async() => (await asyncCaller())).toThrow("Quiero pasar al siguiente modulo");
    });

})