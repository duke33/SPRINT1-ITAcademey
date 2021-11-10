const crypto = require("crypto")
const fsp = require('fs').promises;

//Crea una función que guarde los archivos del punto anterior, ahora cifrados con el algoritmo aes-192-cbc , y borre los archivos iniciales.


const password = 'bncaskdbvasbvlaslslasfhj';
let algorithm = 'aes-192-cbc';
let salt = "GfG"
const key = crypto.scryptSync(password, salt, 24);
const iv = Buffer.from([69, 77, 20, 89, 15, 69, 66, 91, 11, 33, 33, 89, 25, 21, 79, 46]);

/*El valor de iv deberia o hacerlo consante, o pasarlo junto con el contenido encriptado, ya que al ser generado aleatoriamente cada vez que    se corre el codigo, cambia, y la funcion que desencripta necesita saber el valor de alguna forma. Si se encripta y desencripta en la misma ejecucion del archivo no hay problema porque la funcion desencriptar va a tomar el mismo valor de iv que la funcion que encripta.
Hice una forma chapucera de que funcionara añadiendolo al concatenandolo al contenido encriptado, despues haciendo slice en la funcion que desencript, pero como me cuesta trabajar con el objeto buffer tuve que poner muchos toString() y Buffer.from. Decidi dejarlo asi sin mas para que sea mas facil leer el codigo. Omar hazme saber si es necesario que haga alguna implementacion   */




const encryptAndDelete = async(filePath) => {
    try {
        const content = await fsp.readFile(filePath, 'utf-8')
        const buf = Buffer.from(content, 'utf-8');

        let cipher = crypto.createCipheriv(algorithm, key, iv)
        let encrypted = cipher.update(buf, 'utf-8', "hex")
        encrypted += cipher.final("hex")

        await fsp.writeFile("encrypted-" + filePath, encrypted)
        fsp.unlink(filePath)

        return encrypted
    } catch (e) { console.log(e) }
}

//Crea otra función que desencripte y descodifique los archivos del apartado anterior volviendo a generar una copia del inicial.

const decryptData = async(filePath) => {
    try {
        const content = await fsp.readFile(filePath, 'utf-8')
        const buf = Buffer.from(content, 'hex');

        let decipher = crypto.createDecipheriv(algorithm, key, iv)
        let decrypted = decipher.update(buf, "hex", "utf-8")
        decrypted += decipher.final("utf-8")

        await fsp.writeFile("decrypted-" + filePath.substring(10), decrypted)
    } catch (e) { console.log(e) }
}

encryptAndDelete("fileTest-base64.txt").then(() => decryptData("encrypted-fileTest-base64.txt"))
encryptAndDelete("fileTest-hex.txt").then(() => decryptData("encrypted-fileTest-hex.txt"))
encryptAndDelete("fileTest.txt").then(() => decryptData("encrypted-fileTest.txt"))




//                                          |
//                                        \ _ /
//                                      -= (_) =-
//     .\/.                               /   \
//  .\\//o\\                      ,\/.      |              ,~
//  //o\\|,\/.   ,.,.,   ,\/.  ,\//o\\                     |\
//    |  |//o\  /###/#\  //o\  /o\\|                      /| \
//  ^^|^^|^~|^^^|' '|:|^^^|^^^^^|^^|^^^""""""""("~~~~~~~~/_|__\~~~~~~~~~~
//   .|'' . |  '''""'"''. |`===`|''  '"" "" " (" ~~~~ ~ ~======~~  ~~ ~
//   jgs^^   ^^^ ^ ^^^ ^^^^ ^^^ ^^ ^^ "" """( " ~~~~~~ ~~~~~  ~~~ ~