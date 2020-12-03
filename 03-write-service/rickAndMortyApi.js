const fetch = require('node-fetch');


const getCharacter = (id) => {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then(({ name, status, species }) => ({
        name: name,
        status: status,
        species: species
    }))
}

module.exports = { getCharacter };