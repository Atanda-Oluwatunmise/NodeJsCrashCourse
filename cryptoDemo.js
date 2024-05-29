import crypto from 'crypto';

//creating hash with createHash()
// const hash = crypto.createHash('sha256');
// hash.update('password1234'); //hash content
// console.log(hash.digest('hex')); //to get the hash

// crypto.randomBytes(16, (err, buf)=> {
//     if (err) throw err;
//     console.log(buf.toString('hex'));
// })

//createCipherIv and createDecipherIv
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

//to get ciphertext
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello, this is a secret message', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

//to get deciphertext
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);