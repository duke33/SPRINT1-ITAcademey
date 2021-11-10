const os = require('os');
const userFolder = os.homedir()
const fsp = require('fs').promises;



const dirFileList = async() => {
    const result = await fsp.readdir(userFolder)
    console.log(`Folder name: ${userFolder} \nContent:\n${result}`)
}


dirFileList()