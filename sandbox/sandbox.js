// Read a file

// require `const fsPromises = require('fs').promises;`
// use `fsPromises.readFile` to read a file
// `then` `console.log` the file

const fsPromises = require('fs').promises; 

fsPromises.readFile('./read-file.md', 'utf-8')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });


// Write a file

// require const fsPromises = require('fs').promises;
// use fsPromises.writeFile to write a file
// then console.log "DONE!"

fsPromises.writeFile('./write-file.md', 'hello hello')
    .then(() => console.log('done'))
    .catch(err => console.log(err));