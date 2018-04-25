var router = require('express').Router();
var Ships = require('../models/ship');

//Create a Ship
router.post('/api/boards', (req, res, next) => {
    Ships.create(req.body)
        .then(ship => {
            if (!ship) {
                return res.status(400).send({ message: "Ship could not be created" })
            } else {
                res.send(ship)
            }
        })
        .catch(next)
})



module.exports = router;