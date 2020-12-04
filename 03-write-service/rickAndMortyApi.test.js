const { getCharacter, getManyCharacters } = require('./rickAndMortyApi.js');

describe('getCharacter', () => {
    it('should take an id and return a promise that resolves to a character', () => {

        const id = 1;
        const expected = {
            name: 'Rick Sanchez', 
            status: 'Alive', 
            species: 'Human'
        }

        return getCharacter(id)
        .then(result => {
        expect(result).toEqual(expected)
        });
    });
});


describe('getManyCharacters', () => {
    it('should fetch many characters', async() => {

        const result = await getManyCharacters([1, 3, 5, 7]);

        const expected = [
            { name: 'Rick Sanchez', species: 'Human', status: 'Alive' },
            { name: 'Summer Smith', species: 'Human', status: 'Alive' },
            { name: 'Jerry Smith', species: 'Human', status: 'Alive' },
            { name: 'Abradolf Lincler', species: 'Human', status: 'unknown' }
        ]

        expect(result).toEqual(expected)
        });
    });
