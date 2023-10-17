const { readFile, writeFile } = require('fs').promises

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/result-mind-grenade.txt',
            `THIS IS AWSOME: ${first} ${second}`,{flag: 'a'})
        console.log(first, second)

    } catch (error) {
        console.log(error);
    }
}

start()

//___________________using node utility module________________________
/* const util = require('util')

const readFilePromse = util.promisify(readFile)
const writeFilePromse = util.promisify(writeFile)



const start = async () => {
    try {
        const first = await readFilePromse('./content/first.txt', 'utf8')
        const second = await readFilePromse('./content/second.txt', 'utf8')
        await writeFilePromse('./content/result-mind-grenade.txt',
            `THIS IS AWSOME: ${first} ${second}`)
        console.log(first, second)

    } catch (error) {
        console.log(error);
    }
}

start() */


//_____________________create our own promise wrapper______________________
/* const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

getText('./content/first.txt')
    .then((result) => { console.log(result); })
    .catch((err)=>{console.log(err);}) */