const fsPromises = require('fs').promises;

async function transform(src) {
    try {
        return await fsPromises.readFile(src, 'utf-8')
        .then(data => {
            return data.replace(/[A-Z]/g, '');
        })
        .then(data => {
            return data.toUpperCase();
        })
        .then(data => {
            return data.split('').reverse().join('');
            console.log(data);
        })
    } catch(err) {
        console.log(err)
    }
}


module.exports = { transform }
