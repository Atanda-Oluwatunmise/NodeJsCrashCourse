//import fs from 'fs';
import fs from 'fs/promises';
//readFile() method - callback version
// fs.readFile('./text.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

//readFileSync() - Synchronous version
// const data = fs.readFileSync('./text.txt', 'utf-8');
// console.log(data);

//readFile() - Promise .then() version
fs.readFile('./text.txt', 'utf-8')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));


//readFile() - async/await version
const readFile = async () => {
    try {
        const data = await fs.readFile('./text.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};


//Write file
const writeFile = async () => {
    try {
        await fs.writeFile('./text.txt', 'Hello i am writing to this file');
        console.log('File written to...');
    } catch (error) {
        console.log(error);
    }
};

//append file
const appendFile = async () => {
    try {
        await fs.appendFile('./text.txt', '\nI am appending to this file');
        console.log("File appended successfully");
    } catch (error) {
        console.log(error);
    }
}

writeFile();
appendFile();
readFile();
