const LOG_H = "user";
var express = require('express');
var multer = require('multer');
var log = require('./logger');
var router = express.Router();

// for parsing multipart/form-data
var upload = multer();  
var LOG = log.getLogger("User");
router.post('/', upload.array(), (req, res) => {
    var body = req.body;
    if(!body.userName || !body.password) {
        LOG.warn("bad post user request, userName = %s, password = %s.",
        body.userName, body.password);
    }
    res.end();
    return;
});

exports.router = router;