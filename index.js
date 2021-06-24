#! /usr/bin/env node
const args = process.argv.slice(2, process.argv.length);

// Listen on a specific host via the HOST environment variable
var host = args[0] || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = args[1] || 8080;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    //requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});