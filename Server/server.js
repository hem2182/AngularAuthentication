const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

//this is the port where our express server will run
const PORT = 3000
const api = require('./routes/api')

//Creating an instance of express
const app = express();
//Specifying the body parser to handle json data.
app.use(bodyParser.json())
app.use(cors())

//Getting data
app.get('/', function(req, res){
    res.send('Hello from server.')
})

//when the server request to localhost:3000/api, it will use the api route. the api route is the api.js file within the routes folder.
app.use('/api', api)

//listen the request on the specified port.
app.listen(PORT, function() {
    console.log('server running on localhost:' + PORT)
})