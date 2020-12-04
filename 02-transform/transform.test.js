const { transform } = require('./transform.js');

describe('transform', () => {
    it('removes all capital letters, then makes all letters capital, then reverses the string', () => {

        return transform('./transform-this.md')

        .then(transformedFile => {
            expect(transformedFile).toEqual('UO ERD I ,EM MROSNAR')
        });
    });
});
