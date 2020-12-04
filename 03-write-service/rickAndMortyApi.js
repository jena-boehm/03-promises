const fetch = require('node-fetch');


function getCharacter(id) {
    const url = `https://rickandmortyapi.com/api/character/${id}`; 

        return fetch(url)
        .then(res => res.json())
        .then(({ name, status, species }) => ({
            name: name,
            status: status,
            species: species
            }))
        .catch(error => {
            console.log(error);
        });
};

async function getManyCharacters(ids) {
    return await Promise.all(ids.map(id => getCharacter(id)));
};


module.exports = { 
    getCharacter, 
    getManyCharacters 
};
