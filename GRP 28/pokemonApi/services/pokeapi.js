const https = require('https');

module.exports = function fetchData(pokeId) {
    return new Promise((resolve, reject) => {
        https.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`, (apiRes) => {
            let data = '';

            apiRes.on('data', (chunk) => {
                data += chunk;
            });

            apiRes.on('end', () => {
                const apiData = JSON.parse(data);
                let abilitiesSum = 0;

                apiData.abilities.forEach(item => {
                   item = item.ability.url.split('/');

                   abilitiesSum += Number(item[item.length - 2]);
                });

                resolve({
                    "abilitiesSum": abilitiesSum,
                    "name": apiData.name,
                    "sprite": apiData.sprites.back_default,
                    "sprite": apiData.sprites.front_default
                });
            })
        }).on('error', (error) => {
            reject(error);
        })
    })
}