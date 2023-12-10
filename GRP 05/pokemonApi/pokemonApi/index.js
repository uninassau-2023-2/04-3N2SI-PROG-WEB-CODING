const express = require('express');
const router = express.Router();
const http = require('http');
const mysql = require('mysql');
const dbConfig = require('./config/database/HandleDBMSMySQL');
const connection = mysql.createConnection(dbConfig);


router.get('/capturar', (req, res) => {
  const pokemonId = Math.floor(Math.random() * 100) + 1; 
  const apiUrl = `http://pokeapi.co/api/v2/pokemon/${pokemonId}`;

  http.get(apiUrl, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      try {
        const pokemonData = JSON.parse(data);


        const sql = `INSERT INTO pokemons (base_experience, id, name, front_default_url) VALUES (?, ?, ?, ?)`;
        const values = [pokemonData.base_experience, pokemonData.id, pokemonData.name, pokemonData.sprites.front_default];
        console.log(JSON.parse(data) ([pokemonData.base_experience, pokemonData.id, pokemonData.name, pokemonData.sprites.front_default]));
        connection.query(sql, values, (error, results) => {
          if (error) throw error;
          console.log(`Pokémon capturado e salvo no banco de dados. ID: ${results.insertId}`);
          res.json({ message: 'Pokémon capturado e salvo no banco de dados.' });
        });
      } catch (error) {
        console.error('Erro ao capturar e salvar Pokémon:', error);
        res.status(500).json({ error: 'Erro ao capturar e salvar Pokémon.' });
      }
    });
  }).on('error', (error) => {
    console.error('Erro na requisição HTTP:', error);
    res.status(500).json({ error: 'Erro na requisição HTTP.' });
  });
});

module.exports = router;
