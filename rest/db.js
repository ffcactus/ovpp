var config = require("./config");
var validate = require("./validate");
var log = require('./logger');
var es = require('elasticsearch');
var client = new es.Client({
    "host" : config.elasticSearch.host 
});

const INDEX = 'ovpp';
const USER_T = 'user';
const ARGS = {
    index : INDEX,
};

var LOG = log.getLogger('DB');

/**
 * Check if the DB is connected.
 */
function isConnected(cb) {
    client.ping({
        requestTimeout: 30000,
    }, function(error) {
        cb(error);
    })
}

/**
 * Delete a type. Return a promise.
 */
function deleteType(type) {
    return new Promise((fullfill, reject) => {
        ARGS.type = type;
        client.delete(ARGS, (err, res) => {
            if(err) {
                reject(err);                
            } else 
                fullfill(res);
            }            
        });
    });    
}

/**
 * Create a type. Return a promise.
 */
function createType(type) {
    return new Promise((fullfill, reject) => {
        ARGS.type = type;
        client.create(ARGS, (err, res) => {
            if(err) {
                LOG.info("Unable to create type %s, because of %s", type, err);
                reject(err);                
            } else {
                LOG.info("type %s created.", type);
                fullfill(res);
            }            
        });
    });    
}

/**
 * Delete all the users. Return a promise.
 */
function deleteData() {
    return deleteType(USER_T);
}

function createTables() {
    return createType(USER_T);
}

/**
 * Reset the DB.
 */
function resetDB(cb) {
    return new Promise(fullfill, reject) {
        
    }

/**
 * Post an appliance to DB.
 */
function postAppliance(applianceDbObj) {

}

exports.isConnected = isConnected;