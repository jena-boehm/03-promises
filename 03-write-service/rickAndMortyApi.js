const fetch = require('node-fetch');


async function getCharacter(id) {
    const url = `https://rickandmortyapi.com/api/character/${id}`; 

    try {
        return await fetch(url)
        .then(res => res.json())
        .then(({ name, status, species }) => ({
            name: name,
            status: status,
            species: species
            }))
        } catch(err) {
            console.log(err)
        }
}

async function getManyCharacters(ids) {
    return await Promise.all(ids.map(id => getCharacter(id)));
};


module.exports = { getCharacter, getManyCharacters };
