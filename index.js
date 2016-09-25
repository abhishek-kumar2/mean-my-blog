/**
 * file: index.js
 * description: server side script for main entrance of application
 * author: abhishek kumar
 * date: 24/09/2016
 */

'use strict';


/**
 * list of required packages
 */

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var compress = require('compression');

var config = require('./app/config');


/**
 * app declirations and mongodb connection
 */

var app = express(); //espress

mongoose.connect(config.blogdb, function(err) {
    if(err) {
        console.log('mongoose >>--> ', err);
    } else {
        console.log('mongoose >>--> connected to database successfully... ');
    }
});


/**
 * app configuration
 */

app.use(compress()); //zip compress file before sending

app.use(bodyParser.urlencoded({extended: true})); //route image, string, videos

app.use(bodyParser.json()); //parse json

app.use(morgan('dev')); //to log all request to the console

app.use(express.static(__dirname + '/public')); //declare public folder as static path

app.get('*', function(request, response) { console.log(response); //all direct request redirect to index.html
    response.sendFile(__dirname + '/public/index.html');
});

app.listen(config.port, function(err) {
    if(err) {
        console.log('server >>--> ', err);
    } else {
        console.log('server >>--> listening on port 3000...');
    }
});