const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route')
const path = require('path')

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(route);


app.listen(PORT, HOST);