const playerController = require('../../controllers/players');
const router = require('express').Router();

module.exports = router
    .get('/', playerController.index)
    .post('/players', playerController.create)
    .delete('/:id', playerController.destroy)