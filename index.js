const express = require('express');
const app = express();
const cfg = require('./config');

// Attach the routes
const routes = require('./routes');
app.use('/', routes);

// Start listening
app.listen(cfg.port, () => {
  console.log(`Listening on ${cfg.port}`);
})