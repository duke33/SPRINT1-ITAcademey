const os = require('os');
const { spawn } = require('child_process');
const userFolder = os.homedir()


let dirFileList = () => {
    const ls = spawn('ls', [userFolder]);

    ls.stdout.on('data', (data) => {
        console.log(`Folder name: ${userFolder} \nContent:\n${data}`);
    });


    ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
}

dirFileList()