/**
 * The npm tool can be used for installing any third-party node module. It can work with the the [official npm registry](www.npmjs.com), or a local npm registry (say, set up by a company), or even Git project hosting solutions, eg. GitHub. By default it is configured to work with the official npm registry.
 * Third-party modules include both front-end and back-end libraries.
 */
const http = require( 'http' );
// The node module "body" parses the HTTP request body and makes it available under req.body property.
// https://www.npmjs.com/package/body
// Install using ```npm install --save body```
var anyBody = require( 'body/any' );

const server = http.createServer( ( req, res ) => {
    anyBody(req, res, {}, ( err, body ) => {
        if( err ) throw err;

        res.end( `Hello ${body.name}! How is the weather in ${body.city} today?` );
    });
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log( `listening on port ${port}` );
});