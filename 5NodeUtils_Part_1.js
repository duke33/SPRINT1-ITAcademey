const zlib = require('zlib');
const fsp = require('fs').promises;
const fs = require('fs');
const { spawn } = require('child_process');

/*Nivel 1- Ejercicio 1
Crea una función que imprima recursivamente un mensaje por la consola con demoras de un segundo. */

// eslint-disable-next-line no-unused-vars
const everySecond = () => { setInterval(() => console.log('Time Flies'), 1000) }
    //everySecond()



/*Nivel 1- Ejercicio 2
Crea una función que, al ejecutarla, escriba una frase en un archivo. */
const textToBeWritten = "Lorem. No todo lo que es oro reluce Ni toda la gente errante anda perdida"

const writeFile = async(string) => {
    try {
        await fsp.writeFile('fileTest.txt', string)
    } catch (e) { console.log(e.message) }
}

writeFile(textToBeWritten)

/*Nivel 1 - Ejercicio 3
Crea otra función que muestre por consola el contenido del archivo del ejercicio anterior. */

const readAndPrint = async() => {
    try {
        const data = await fsp.readFile("fileTest.txt", 'utf8')
        console.log(data)
    } catch (e) { console.log(e.message) }
}

readAndPrint()

/*Nivel 2 - Ejercicio 1
Crea una función que comprima el archivo del nivel 1.*/
const compressFile = (filePath) => {
    var gzip = zlib.createGzip();
    var r = fs.createReadStream(filePath);
    var w = fs.createWriteStream('./mygzipfile.txt.gz');
    r.pipe(gzip).pipe(w);
}
compressFile("fileTest.txt")


/*Crea una función que liste por la consola el contenido del directorio de usuario del ordenador utilizando Node Child Processes.*/

let dirFileList = () => {
    const ls = spawn('ls', ['/usr']);

    ls.stdout.on('data', (data) => {
        console.log(`Folders:\n${data}`);
    });


    ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
}

dirFileList()

//Me gustaria entender que diferencia hay enetre hacerlo de una forma u otra.
const dirFileList2 = async() => {
    const result = await fsp.readdir("/usr")
    console.log(result)
}
dirFileList2()

/*Nivel 3
- Ejercicio 1 

Crea una función que cree dos archivos codificados en hexadecimal y en base64 respectivamente, a partir del archivo del nivel 1.*/

const copyToHexAndBase64 = async(filePath) => {

    try {
        const content = await fsp.readFile(filePath, 'utf8')
        const buf = Buffer.from(content, 'utf8');

        await fsp.writeFile('fileTest-hex.txt', buf.toString('hex'))
        await fsp.writeFile('fileTest-base64.txt', buf.toString("base64"))
    } catch (e) { console.log(e.message) }
}

copyToHexAndBase64("fileTest.txt")