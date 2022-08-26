const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/api-rest-full', {useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;
    