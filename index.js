//importing using express js module/system
import getPost, {getPostLength} from "./postController.js";
console.log(getPost());
console.log(getPostLength());

// //importing the function using commonjs system
// const {generateRandomNumber, celciusToFahrenheit} = require('./utils');

// console.log(`Random number: ${generateRandomNumber()}`)
// console.log(`Weather in Fahreinheit: ${celciusToFahrenheit(35)}`);