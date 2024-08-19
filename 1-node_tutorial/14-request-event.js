

const EventEmitter  = require('events');

//on --listen for event
//emit - emit an event
const customEmitter = new EventEmitter()


customEmitter.on('response' , (name , id) => {
    console.log(`data received ${name} with ${id}`);
})


customEmitter.emit('response'  , 'mudasir' , 30)

var myEventHandler = function () {
    console.log('I hear a scream!');
  }
  
  //Assign the event handler to an event:
  customEmitter.on('scream', myEventHandler);
  
  //Fire the 'scream' event:
  customEmitter.emit('scream');
  