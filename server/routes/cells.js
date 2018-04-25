var router = require('express').Router();
var Cells = require('../models/cell');

//Create a Cell
router.post('/api/cells', (req, res, next) => {
    Cells.create(req.body)
        .then(cell => {
            if (!cell) {
                return res.status(400).send({ message: "Cell could not be created" })
            } else {
                res.send(cell)
            }
        })
        .catch(next)
})

//Get Cell by Id
router.get('/api/cells/:cellId', (req, res, next) => {
    Cells.findById(req.params.cellId)
        .then(cell => {
            res.send(cell)
        })
        .catch(next)
})



module.exports = router;