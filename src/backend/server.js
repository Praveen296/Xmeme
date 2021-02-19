require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const memesRouter = require('./routes/memes');
const path = require('path');

app.use(cors()); //Supports secure cross origin requests 
app.use(express.json()); //Required for parsing the JSON objects.

//Connecting to the DB
mongoose.connect('mongodb://localhost:27017/xmeme',{ useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected to MongoDB'));

//Sending the requesting to the router object
app.use('/',memesRouter);        

if(process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
    });
}

//Port number
const port = process.env.PORT || 8081;

app.listen(port,() => {
    console.log(`Server is running on port: ${port}`);
})