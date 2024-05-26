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

readFile();