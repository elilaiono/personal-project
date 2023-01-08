const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Marvin Aiono');
});

module.exports = routes;
