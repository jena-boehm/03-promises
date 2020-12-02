const fsPromises = require('fs').promises;

async function copyFile(src, dst) {
    try {
        const fileData = await fsPromises.readFile(src, 'utf-8');
        await fsPromises.writeFile(dst, fileData);
    } catch(err) {
        console.log(err)
    }
}

module.exports = { copyFile }
