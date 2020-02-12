//const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose')
const schema = mongoose.Schema

// create a new schema for user data in mongo db
const userSchema = new schema ({
    username: String,
    password: String
})

module.exports = mongoose.model('user', userSchema, 'users')
