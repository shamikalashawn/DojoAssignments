const Player = require('mongoose').model('Player');

module.exports = {
    index(request, response) {

    },
    showAll(request, response) {
        console.log('retrieving all players');
        Player.find({}, function(err, players) {
            if (err) {
                console.log('error retrieving players: ', err);
            }
            response.json(players);
        })
    },
    create(request, response) {
        console.log("Creating a player");
        var newPlayer = new Player(request.body);
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