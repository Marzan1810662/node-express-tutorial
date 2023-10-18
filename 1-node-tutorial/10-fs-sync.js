const { readFileSync, writeFileSync } = require('fs')

console.log('start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first,'and', second);

//this will create a file if the did not exist and also overwrite the file if this file existed and had sth in the file
writeFileSync('./content/result-sync.txt', `Here is the result: ${first},${second}`);

//this will append data in the file
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first},${second}`,
    { flag: 'a' });

console.log('Done with this task');
console.log('starting the next one');

