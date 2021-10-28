const crypto = require("crypto")
const fsp = require('fs').promises;
const fs = require('fs');


let algorithm = 'aes-256-ctr'; //"aes-192-cbc"//TODO cambiar este alg
let iv = crypto.randomBytes(16)
let key = '743777217A25432A462D4A614E645267556B58703273357638782F413F442847';
key = crypto.createHash('sha256').update(key).digest('base64').substr(0, 32); //TODO asegurarte que sea tan grande como se necesita
console.log('iv1: ', iv)


const encryptAndDelete = (path, encoding) => {
    //TODO falta que lea
    const content = fs.readFileSync(path, encoding) //TODO por que no lo puedo hacer asincrono?=???
    const buf = Buffer.from(content, encoding);
    console.log('buf:', buf)

    let cipher = crypto.createCipheriv(algorithm, key, iv)
    let encrypted = cipher.update(buf, encoding, "hex")
    encrypted += cipher.final("hex")

    fs.writeFileSync("encrypted-" + path, encrypted) // Probablemente esto este causando problemas, tal vez tengas que agregar tostring(encode)
    console.log('encrypted: ', encrypted)
        //TODO falta borre el archivo viejo

    return encrypted

}


const decryptData = (path, originalEncoding) => { //Revisar que puede que esto de casualidad este pasando UTF necesario y no dependiente
        //TODO el problema es que tenes que leer el archivo aca, pelotudo! Fijate que el siguiente comment no te joda la vida!
        const content = fs.readFileSync(path, 'utf-8') //Ponerle await //TODO aca tiene que ser utf-8 original encoding!!!!!!!!!!!!!!!!!!!!!!!!
        const buf = Buffer.from(content, 'hex');


        let decipher = crypto.createDecipheriv(algorithm, key, iv)

        let decrypted = decipher.update(buf, "hex", originalEncoding)
        decrypted += decipher.final(originalEncoding)
        console.log('decrypted: ', decrypted)
        fs.writeFileSync("decrypted-" + path, decrypted)

    }
    //TODO borar la variable encripted esta
encryptAndDelete("bananas.txt", "utf-8") //TODO aca el utf lo tenes que cambiar por el argumento encoding // aca lo vas a hacer async
decryptData("encrypted-bananas.txt", "utf-8") //TODO ponele un timeout para ver que pasa, y hace la otra asincrona. Le estas pasando un string no un archivo!

//TODO borrar los console.log