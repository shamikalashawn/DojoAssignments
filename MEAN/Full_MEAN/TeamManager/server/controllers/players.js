const Player = require('mongoose').model('Player');

module.exports = {
    index(requrest, response) {
        response.render('index.html')
    },
    create(requrest, response) {

    },
    destroy(requrest, response) {

    },
}