var mongoose = require('mongoose');
var connectionString = 'mongodb://admin:admin@ds014648.mlab.com:14648/battleship';
var connection = mongoose.connection;

mongoose.connect(connectionString);
connection.on('error', err =>{
    console.log('server error:', err);
});
connection.once('open', ()=>{
    console.log('Connected to Database');
});