var router = require('express').Router();
var Boards = require('../models/board');

//Create a Board
router.post('/api/boards', (req, res, next) => {
    Boards.create(req.body)
        .then(board => {
            if (!board) {
                return res.status(400).send({ message: "Board could not be created" })
            } else {
                res.send(board)
            }
        })
        .catch(next)
})

//Get Board by Id
router.get('/api/boards/:boardId', (req, res, next) => {
    Boards.findById(req.params.boardId)
        .then(board => {
            res.send(board)
        })
        .catch(next)
})

//Find boards by userId
router.get('/api/boards/:userId', (req, res, next) => {
    Boards.find({playerId: req.params.userId})
        .then(boards => {
            res.send(boards)
        })
        .catch(next)
})



module.exports = router;