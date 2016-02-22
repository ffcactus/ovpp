
const https = require('https'); 
/*
applianceInfo : {
    url : "url",
    uuid : "uuid"    
}
*/
const defaultHeaders = {
    'Content-Type': 'application/json',
    'X-Api-Version': '200',
};

/**
 * Get the session ID by url, username and password.
 */
function getSessionId(uri, userName, password) {
    return new Promise(function (fullfill, reject) {
        var options = {
            rejectUnauthorized: false,
            requestCert: true,
            headers: defaultHeaders,
            hostname: uri,
            path: '/rest/login-sessions',
            method: 'POST'
        };
        var req = https.request(options, function (response) {
            response.setEncoding('utf-8');
            var responseString = '';
            response.on('data', function(data) {
                responseString += data;
            });
            response.on('end', function() {
                fullfill(JSON.parse(responseString));
            });
        });
        req.on('error', function (error) {
            reject(error);
        });
        req.write(JSON.stringify({
            'userName': userName,
            'password': password
        }));
        req.end();
    });
}

function getApplianceInfo(url, sessionId) {

}

exports.getSessionId = getSessionId;