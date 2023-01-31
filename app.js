const express = require ("express");
const logger = require('morgan');

const router = require ("./config/routes.config")
require('./config/hbs.config');

const app = express();

app.use(logger('dev')); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static("public"));

/** Router **/
app.use('/', router);




app.listen(3000, () => console.log('App listening on port 3000!'));