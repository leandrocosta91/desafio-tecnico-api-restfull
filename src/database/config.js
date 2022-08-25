const mongoose = require('mongoose');

module.exports = () => 
    mongoose.connect('mongodb://mongo:27017/api-rest-full').then(() => {
        console.log('Database is running');
    })