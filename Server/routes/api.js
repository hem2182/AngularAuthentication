// this is where we define all our api endpoints.
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const User = require('../models/user')

//Connect to mongo db
const db = "mongodb+srv://hem2182:Fac3l3ss-1990@angularauth-orjdo.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true, dbName: 'eventsDb' }, err => {
    if (err) {
        console.error('Error!' + err)
    } else {
        console.log('Connected to mongo DB.')
    }
})

router.get('/', (req, res) => {
    res.send('From API route.')
})

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(registeredUser)
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    //proceed only if username exists. use findOne method.
    user.collection.findOne({username: userData.username}, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            if (!user) {
                res.status(401).send('Invalid username')
            } else {
                if (user.password !== userData.password) {
                    res.status(401).send('Invalid Password')
                }
                else {
                    res.status(200).send(user)
                }
            }
        }
    })
})

router.get('/events', (req, res) => {
    let events = [
        {
            "_id" : "1",
            "name" : "Auto Expo",
            "description" : "description 1",
            "date" : "2014-04-23T18:25:43.511Z"
        },
        {
            "_id" : "1",
            "name" : "Auto Expo",
            "description" : "description 2",
            "date" : "2014-05-23T18:25:43.511Z"
        }
    ]
    res.json(events)
})

router.get('/special', (req, res) => {
    console.log("Executing Special Events")
    let events = [
        {
            "_id" : "1",
            "name" : "Auto Expo",
            "description" : "description 1",
            "date" : "2014-04-23T18:25:43.511Z"
        },
        {
            "_id" : "1",
            "name" : "Auto Expo",
            "description" : "description 2",
            "date" : "2014-05-23T18:25:43.511Z"
        }
    ]
    res.json(events)
})


module.exports = router