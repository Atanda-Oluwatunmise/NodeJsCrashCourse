import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();

//functions to run or call when an event is emitted
function greetHandler(name){
    console.log('Hello ' + name);
}

function goodbyeHandler(name){
    console.log('Goodbye ' + name);
}

//on method is used to register multiple listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

//Emit events
myEmitter.emit('greet', 'John');
myEmitter.emit('goodbye', 'John');

//Error Handling
myEmitter.on('error', (err) => {
    console.log("An error occured:", err);
});

//Simulate the error
myEmitter.emit('error', new Error('Something went wrong'));