const playerController = require('../../controllers/players');
const router = require('express').Router();
const path = require('path');

module.exports = router
    .get('/', playerController.index)
    .post('/players', playerController.create)
    .delete('/players/:id', playerController.destroy)
    .all('*', function(request, response) {
        response.sendFile(path.join(__dirname, '../../../dist/index.html'))
    })