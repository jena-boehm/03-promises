const { transform } = require('./transform.js');
const fsPromises = require('fs').promises;

describe('transform', () => {
    it('removes all capital letters, then makes all letters capital, then reverses the string', async() => {

        return await transform('./transform-this.md')

        .then(transformedFile => {
            expect(transformedFile).toEqual('UO ERD I ,EM MROSNAR')
        });
    });
});
