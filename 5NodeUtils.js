var zlib = require('zlib');
const fsp = require('fs').promises;
var fs = require('fs');
/*Nivel 1- Ejercicio 1
Crea una función que imprima recursivamente un mensaje por la consola con demoras de un segundo. */

// eslint-disable-next-line no-unused-vars
const everySecond = () => { setInterval(() => console.log('Time Flies'), 3000) }
    //everySecond()



/*Nivel 1- Ejercicio 2
Crea una función que, al ejecutarla, escriba una frase en un archivo. */

const writeFile = async() => {
    await fsp.writeFile('fileTest.txt', 'test2')
}

writeFile()

/*Nivel 1 - Ejercicio 3
Crea otra función que muestre por consola el contenido del archivo del ejercicio anterior. */

const readAndPrint = async() => {
    const data = await fsp.readFile("fileTest.txt", 'utf8')
    console.log(data)
}

readAndPrint()

/*Nivel 2 - Ejercicio 1
Crea una función que comprima el archivo del nivel 1. //TODO falta hacer esto, consultarlo
Crea una función que liste por la consola el contenido del directorio de usuario del ordenador utilizando Node Child Processes.*/
const compressFile = (path) => {
    var gzip = zlib.createGzip();
    var r = fs.createReadStream(path);
    var w = fs.createWriteStream('./mygzipfile.txt.gz');
    r.pipe(gzip).pipe(w);
}
compressFile("fileTest.txt")



const dirFileList = async() => {
    const result = await fsp.readdir(__dirname)
    console.log(result)
}

dirFileList()

/*Nivel 3
- Ejercicio 1 Crea una función que cree dos archivos codificados en hexadecimal y en base64 respectivamente, a partir del archivo del nivel 1.*/

const copyToHexAndBase64 = async(path) => {


    const content = await fsp.readFile(path, 'utf8')
    const buf = Buffer.from(content, 'utf8');

    await fsp.writeFile('fileTest-hex.txt', buf.toString('hex')) // Si aca le añadis el parametro "hex" al final, escribe el texto en el archivo en vez de la representacion hexadecimal
    await fsp.writeFile('fileTest-base64.txt', buf.toString("base64"))

}

copyToHexAndBase64("fileTest.txt")

//Crea una función que guarde los archivos del punto anterior, ahora cifrados con el algoritmo aes-192-cbc , y borre los archivos iniciales.


//Crea otra función que desencripte y descodifique los archivos del apartado anterior volviendo a generar una copia del inicial.