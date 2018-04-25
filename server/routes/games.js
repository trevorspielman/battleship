var router = require('express').Router();
var Games = require('../models/game');

//Create a Game
router.post('/api/games', (req, res, next) => {
    Games.create(req.body)
        .then(game => {
            if (!game) {
                return res.status(400).send({ message: "Game could not be created" })
            } else {
                res.send(game)
            }
        })
        .catch(next)
})

//Get Game by Id
router.get('/api/games/:gameId', (req, res, next) => {
    Games.findById(req.params.gameId)
        .then(game => {
            res.send(game)
        })
        .catch(next)
})

module.exports = router