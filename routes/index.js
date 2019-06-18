/**
 * Main Routes file
 * 
 */
const router = require('express').Router();

// Import routes
const players = require('./playersRoutes');

// Inject routes
router.use('/players', players);

module.exports = router;
