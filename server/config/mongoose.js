const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/RestfulTaskAPI', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(event){
    console.log('open')
})
module.exports = mongoose;