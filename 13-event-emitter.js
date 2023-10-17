const EventEmitter = require('events')

const customEvent = new EventEmitter()

customEvent.on('response', (name, id) => {
    console.log(`Data Received with ${name} with id: ${id}`);
})
customEvent.on('response', () => {
    console.log(`Some other logic`);
})

customEvent.emit('response', 'John', 34)