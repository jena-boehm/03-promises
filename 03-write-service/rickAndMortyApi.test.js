const { getCharacter, getManyCharacters } = require('./rickAndMortyApi.js');
const mockSingleResponse = require('../single-character.json');
const fetch = require('node-fetch');

jest.mock('node-fetch');

describe('getCharacter', () => {
    it('should take an id and return a promise that resolves to a character', () => {

        fetch.mockResolvedValue({
            json: () => Promise.resolve(mockSingleResponse)
        });

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

        fetch.mockResolvedValue({
            json: () => Promise.resolve(mockSingleResponse)
        });

        const ids = [1, 3, 5, 7];
        const result = await getManyCharacters(ids);
        const expected = [
            { name: 'Rick Sanchez', species: 'Human', status: 'Alive' },
            { name: 'Rick Sanchez', species: 'Human', status: 'Alive' },
            { name: 'Rick Sanchez', species: 'Human', status: 'Alive' },
            { name: 'Rick Sanchez', species: 'Human', status: 'Alive' }
        ]

        expect(result).toEqual(expected)
        });
    });
