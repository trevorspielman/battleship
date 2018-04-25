let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = mongoose.SchemaTypes.ObjectId
let schemaName = "Board"

let schema = new Schema({
    boards: [{type: Object}],
    playerIds: [{type: ObjectId, ref: 'User', required: true}],
    done: {type: Boolean, required: true, default: false}
})


module.exports = mongoose.model(schemaName, schema)