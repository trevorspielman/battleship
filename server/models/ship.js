let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = mongoose.SchemaTypes.ObjectId
let schemaName = "Ship"

let schema = new Schema({
    name: {type: String, required: true},
    size: {type: Number, required: true}
})


module.exports = mongoose.model(schemaName, schema)