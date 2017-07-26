const Player = require('mongoose').model('Player');

module.exports = {
    index(request, response) {

    },
    create(request, response) {
        console.log("Creating a player");
        var newPlayer = new Player(req.body);
        console.log("Created new player: ", newPlayer);
        newPlayer.save(function(err) {
            if (err) {
                console.log(err);
            }
            console.log('New player saved');
            response.redirect('/players/list')
        })
    },
    destroy(request, response) {

    },
}