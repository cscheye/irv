'use strict';

const Hapi = require('hapi')
const glob = require('glob')
const path = require('path')


const server = Hapi.server({
    host: 'localhost',
    port: 8000
});


glob.sync( './routes/**/!(_*).js' ).forEach(function(route_filepath) {
  let Route = require(path.resolve(route_filepath))
  console.log(Route)
  let route = new Route()
  server.route(route.config)
});

// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at: ', server.info.uri);
};

start();
