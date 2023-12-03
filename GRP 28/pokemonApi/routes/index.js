var express = require('express');
var router = express.Router();

var fetchData = require('../services/pokeapi');

/* GET home page. */
router.get('/:id', async function(req, res, next) {
  const apiData = await fetchData(req.params.id);
  res.render('index', { title: 'pokerAPI', pokemon: apiData });
});

module.exports = router;
