var bcrypt = require('bcryptjs');

function generateToken(password) {
    var salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

/**
 * Get the user's token.
 */
function getUserToken(userName, cb) {
    
}

function authenticate(userName, password) {
    getUserToken(userName, (token) => {
        
    });
}
exports.getPasswordHash =  getPasswordHash;