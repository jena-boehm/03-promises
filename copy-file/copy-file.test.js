const { copyFile } = require('./copy-file.js');
const fsPromises = require('fs').promises;

describe('copyFile', () => {
    it('reads a file and copies that file', () => {
        return copyFile('./copy-this.md', './copied-it.md')
        .then(() => {
            return fsPromises.readFile('./copied-it.md', 'utf-8');
        })
        .then(copiedFile => {
            expect(copiedFile).toEqual('copy this, I dare you')
        })
    })
})
