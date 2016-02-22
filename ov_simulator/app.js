var LOG_H = "app";
var config = require('./config');
var express = require('express');
var app = express();
var simulator = express();

app.listen(config.port, function() {
    console.info(LOG_H + " listen on " + config.port);
});

simulator.get('/rest/login-sessions', function(req, res) {
    res.send("xxxxxxxxxxxxxxxxxxxx");
});

app.use('ovs_*', simulator);

app.get("/test")



