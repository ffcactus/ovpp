// The start point of this application.
const LOG_H = "Start"

var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var config = require('./config');
var db = require('./db');
var user = require('./user-routers');
var oneview = require("./oneview");
var auth = require('./authentication');
var app = express();
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : true}));
// for parsing multipart/form-data
var upload = multer();  

console.info(LOG_H + " begin.");
app.use('/user', user.router);
app.listen(config.port);

// Make sure the DB is connected.
db.isConnected(function(error) {
    if(error) {
        console.error(LOG_H + " DB is not connected.");        
    } else {
        console.info(LOG_H + " DB is connected.");
    }
});

/*
oneview.getSessionId("16.114.217.19", "Administrator", "hpvse123").then(function(res) {
    console.info(res.sessionID);
});
*/


var token = auth.getPasswordHash('iforgot');
console.info(token);


console.info(LOG_H + " done.");