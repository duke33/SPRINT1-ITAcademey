//Nivel 1 - Ejercicio 1
// Crea una función que devuelva una Promise que invoque la función resolve () o reject () que recibe. Invócala pasándole las dos funciones de forma que impriman un mensaje diferente dependiendo de si la Promise se resuelve o no.

console.log('Nivel 1 Ejercicio 1-------------------------------------------');

const fun = (boolean) => new Promise((resolve, reject) => {
    if (boolean) {
        resolve(console.log('promise resolved'))
    } else {
        reject(new Error('promise rejected'))
    }
})

fun(true) //promise resolved
fun(false).catch((e) => { console.log(e.message) }) //promise rejected