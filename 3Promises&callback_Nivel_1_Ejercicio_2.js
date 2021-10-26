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