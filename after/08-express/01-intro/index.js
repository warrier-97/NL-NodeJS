/// <reference path="../../../node_modules/@types/express/index.d.ts" />
/// <reference path="../../../node_modules/@types/express-serve-static-core/index.d.ts" />

const express = require( 'express' );
const http = require( 'http' );
const path = require( 'path' );

// create the express application object
// An express project can be divided into sub-applications - there can thus be multiple such express() calls to create multiple app objects - but usually we have only one
// Reference: https://derickbailey.com/2016/02/17/using-express-sub-apps-to-keep-your-code-clean/
const app = express();


// You can configure routes directly via the express app object
app.get( '/', ( req, res, next ) => {
    res.sendFile( path.join( __dirname, 'html/index.html' ) );
});

app.get( '/about', ( req, res, next ) => {
    res.sendFile( path.join( __dirname, 'html/about.html' ) );
});

const port = process.env.PORT || 3000;

// Method #1 to create a server
// const server = http.createServer( app );

// server.listen( port, err => {
//     if( err ) throw err;

//     console.log( 'Express Server is listening on port ' + port );
// });

// Method #2 to create a server - The app object can be used to call the associated server
app.listen( port, err => {
    if( err ) throw err;

    console.log( 'Express Server is listening on port ' + port );
});
