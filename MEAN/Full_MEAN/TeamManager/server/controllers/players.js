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
                console.log("error while trying to save newPlayer: ", err);
            }
            console.log('New player saved');
            response.json(newPlayer);
        })
    },
    destroy(request, response) {
        console.log('in server using destroy method on player with id: ', request.params.id);
        Player.findByIdAndRemove(request.params.id)
            .then(function(player) {
                console.log('player has been deleted: ', player);
                reponse.json(player);
            })
            .catch(console.log())
    },
}