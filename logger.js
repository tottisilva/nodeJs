const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter{
    log(msg){
        // Call event
        this.emit('message', {id: uuidv4(), msg})
    }
}
// module.exports = Logger;
const Logger = require('./logger');

const looger = new Logger();

logger.on('message', data => console.log('Called Listener', data));

logger.log('Hello Node.js');
