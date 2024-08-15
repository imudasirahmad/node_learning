
const {createReadStream , createWriteStream} = require('fs');
const { keyBy } = require('lodash');

// const stream = createReadStream('./content/big.txt');

// const {ReadStream} = require('fs');
// const stream = ReadStream('./content/big.txt');

//default 64kb
//last buffer - remainder
//highWaterMark - control Size
const stream = createReadStream('./content/big.txt' , {highWaterMark: 90000});

// const stream = createReadStream('./content/big.txt' , {encoding: 'utf8'});


stream.on('data' , (result) => {
    console.log(result);
})

stream.on('end', () => {
    console.log('Reading completed');
  });
  
  stream.on('error', (err) => {
    console.error('Error:', err);
  });


  //. Writing to a File using Streams
  const writeStream = createWriteStream('./content/output.txt', { encoding: 'utf8' });
  writeStream.write('Hello, ');
  writeStream.write('world!\n');
  writeStream.end('This is the end of the stream.');

writeStream.on('finish', () => {
  console.log('Writing completed');
});

writeStream.on('error', (err) => {
  console.error('Error:', err);
});