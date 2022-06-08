const express = require('express');
const expHbs = require ('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

// To support URL-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));

// To parse cookies from the HTTP Request
app.use(cookieParser());

app.engine('hbs', expHbs({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

// Out request handlers will be implemented here...

app.listen(3000);