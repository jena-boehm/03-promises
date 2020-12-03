const { getCharacter } = require('./rickAndMortyApi.js');

describe('getCharacter', () => {
    it('should take an id and return a promise that resolves to a character', async() => {

        const id = 1;
        const expected = {
            name: 'Rick Sanchez', 
            status: 'Alive', 
            species: 'Human'
        }
        
        return await getCharacter(id)
        .then(result => {
        expect(result).toEqual(expected)
        });
    });
});