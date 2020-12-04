const fsPromises = require('fs').promises;

function transform(src) {
        return fsPromises.readFile(src, 'utf-8')
        .then(data => {
            return data.replace(/[A-Z]/g, '');
        })
        .then(data => {
            return data.toUpperCase();
        })
        .then(data => {
            return data.split('').reverse().join('');
        })
        .catch(error => {
            console.log(error);
        });
};


module.exports = { transform }
