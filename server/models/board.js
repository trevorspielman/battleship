let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = mongoose.SchemaTypes.ObjectId
let schemaName = "Board"

let schema = new Schema({
    playerId: {type: ObjectId, ref: 'User', required: true},
    gameId: {type: ObjectId, ref: 'Game', required: true}
})


module.exports = mongoose.model(schemaName, schema)