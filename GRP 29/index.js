const express = require('express');
const mysql = require('mysql2/promise');
const https = require('https');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Kaian',
  password: '1233456789',
  database: 'pokemon_api',
});

// Função para obter dados de um Pokémon da PokeAPI
const getPokemonData = (pokemonId) => {
  return new Promise((resolve, reject) => {
    https.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`, (apiRes) => {
      let data = '';

      apiRes.on('data', (chunk) => {
        data += chunk;
      });

      apiRes.on('end', () => {
        try {
          const pokemonData = JSON.parse(data);
          resolve(pokemonData);
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
};

app.get('/capturar', async (req, res) => {
  try {
    // Gerar um ID aleatório de 1 a 100
    const pokemonId = Math.floor(Math.random() * 100) + 1;

    // Obter dados do Pokémon usando a função getPokemonData
    const pokemonData = await getPokemonData(pokemonId);

    // Extrair informações necessárias
    const { base_experience, id, name, sprites } = pokemonData;
    const front_default = sprites.other.dream_world.front_default;

    // Salvar no banco de dados
    await connection.execute(
      'INSERT INTO captured_pokemon (base_experience, id, name, front_default) VALUES (?, ?, ?, ?)',
      [base_experience, id, name, front_default]
    );

    res.json({ message: 'Pokémon capturado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao capturar o Pokémon' });
  }
});

app.get('/pokedex', async (req, res) => {
  try {
    // Consultar todos os Pokémon capturados no banco de dados
    const [rows] = await connection.execute('SELECT * FROM captured_pokemon');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter a Pokédex' });
  }
});

app.get('/pokedex/:id', async (req, res) => {
  const pokemonId = req.params.id;
  try {
    // Consultar um Pokémon específico no banco de dados pelo ID
    const [rows] = await connection.execute('SELECT * FROM captured_pokemon WHERE id = ?', [pokemonId]);

    if (rows.length === 0) {
      res.status(404).json({ error: 'Pokémon não encontrado na Pokédex' });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter o Pokémon da Pokédex' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

