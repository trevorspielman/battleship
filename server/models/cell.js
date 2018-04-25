let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = mongoose.SchemaTypes.ObjectId
let schemaName = "Cell"

let schema = new Schema({
    hasShip: {type: Boolean, required: true, default: false},
    clicked: {type: Boolean, required: true, default: false},
    boardId: {type: ObjectId, ref: 'Board', required: true}
})


module.exports = mongoose.model(schemaName, schema)