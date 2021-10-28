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

    fs.writeFileSync("encrypted-" + path, encrypted)
    console.log('encrypted: ', encrypted) //TODO borrar
        //TODO falta borre el archivo viejo

    return encrypted

}


const decryptData = (encrypted, originalEncoding) => {
    let decipher = crypto.createDecipheriv(algorithm, key, iv)

    let decrypted = decipher.update(encrypted, "hex", originalEncoding)
    decrypted += decipher.final("utf-8") //TODO aca el utf lo tenes que cambiar por el argumento encoding????????
    console.log('decrypted: ', decrypted) //TODO borar

}

let encrypted = encryptAndDelete("bananas.txt", "utf-8") //TODO aca el utf lo tenes que cambiar por el argumento encoding // aca lo vas a hacer async
decryptData(encrypted, "utf-8") //TODO ponele un timeout para ver que pasa, y hace la otra asincrona