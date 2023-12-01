const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/capturar', async (req, res) => {
  const idpokealeatorio = Math.floor(Math.random() * 100) + 1;

  try {
    const respostadaapi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idpokealeatorio}`);
    const pokemoninfo = respostadaapi.data;

    const sql = 'INSERT INTO pokemons (base_experience, id, name, sprite_url) VALUES (?, ?, ?, ?)';
    const values = [
        pokemoninfo.base_experience,
        pokemoninfo.id,
        pokemoninfo.name,
        pokemoninfo.sprites.other.dream_world.front_default,
    ];

    db.query(sql, values, (err, result) => {
      if (err) throw err;
      console.log('Pokemon capturado e salvo no banco de dados!');
    });

    res.json(pokemoninfo);

  } catch (error) {
    console.error(error);
    res.status(500).send('Ops, parece que houve um erro ao capturar o Pokémon, confira o console para mais informações');
  }
});

router.get('/pokedex', (req, res) => {
  // consultando os poke do db e rotornando
  db.query('SELECT * FROM pokemons', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

router.get('/pokedex/:id', (req, res) => {
  const pokeId = req.params.id;

  // consultando o db e retornando o pokemon com o id informado
  db.query('SELECT * FROM pokemons WHERE id = ?', [pokeId], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).send('Poxa, esse Pokémon não foi encontrado nessa Pokédex');
    }
  });
});

module.exports = router;
