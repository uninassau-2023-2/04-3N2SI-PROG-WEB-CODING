const express = require('express');
const https = require('https');

const app = express();
const port = 3000;

app.get('/pokemon/:id', (req, res) => {
  const pokemonId = req.params.id;

  https.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`, (apiRes) => {
    let data = '';

    apiRes.on('data', (chunk) => {
      data += chunk;
    });


    apiRes.on('end', () => {
      const pokemonData = JSON.parse(data);

      const abilitiesSum = pokemonData.abilities.reduce(
        (sum, ability) => sum + ability.slot,
        0
      );

      const responseObject = {
        abilities: abilitiesSum,
        name: pokemonData.name,
        back_default: pokemonData.sprites.back_default,
      };

      res.json(responseObject);
    });
  });
});

app.listen(port, () => {
  console.log(`running at http://localhost:${port}`);
});
