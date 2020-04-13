const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

const mongoURI = 'mongodb://localhost/reactlogintest';

mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('The (mon)goose is on the loose!'))
    .catch(err => console.log(err));

const Users = require('./routes/Users');

app.use('/users', Users);

app.listen(port, () => {
    console.log('The server is ever listening on port: ' + port);
});