const { EventEmitter } = require('events');


// create a class
class MyEmiter extends EventEmitter { }

//Init object
const myEmitter = new MyEmiter();

// Event Listener 
myEmitter.on('event', () => console.log('Event fired ...'));

// Init event
myEmitter.emit('event'); 