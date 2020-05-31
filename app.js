const express = require('express');
const app = express();

const port = 8080;

app.get('/' , (req, res) => res.send('hello world'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;


//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date
});
var SomeModel = mongoose.model('SomeModel', SomeModelSchema );



//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


module.exports = app;