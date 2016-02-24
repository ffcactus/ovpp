define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('./messages');
    var login = require('./login');

    // Load library/vendor modules using
    // full IDs, like:
    var print = require('print');

    print(messages.getHello());
    login.init();
});