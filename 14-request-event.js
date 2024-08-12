

const EventEmitter  = require('events');

//on --listen for event
//emit - emit an event
const customEmitter = new EventEmitter()


customEmitter.on('response' , (name , id) => {
    console.log(`data received ${name} with ${id}`);
})


customEmitter.emit('response'  , 'mudasir' , 30)