/// <reference path="../../../node_modules/@types/express/index.d.ts" />
/// <reference path="../../../node_modules/@types/express-serve-static-core/index.d.ts" />

const express = require( 'express' );
const http = require( 'http' );
const path = require( 'path' );

const app = express();


/**
 * The Express middleware (a static file server) can serve static files (HTML, CSS, JS, images, font files etc.) from a given folder.
 * You can configure the static file server to serve from various root folders - roots folders are probed for match in the order they are set.
 * Express looks up the files relative to the static directory, so the name of the static directory is not part of the URL - example http://localhost:3000/about.html will return public/about.html
 * However, the path that you provide to the express.static() )is relative to the directory from where you launch your node process. If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve.
 */
// Folder #1: /public - check when static files are requested on any URL path
app.use( express.static( 'public', {
    index: "index.html", /* Enables/disables (set false) serving up of index file in folder path being requested - default is also true */
    maxAge: 24 * 60 * 60 * 1000
}));
// Folder #2: /admin - use only if the URL path begins with /admin
app.use( '/admin', express.static( path.join( __dirname, 'admin' ) ) ); /* specifying a absolute path for the static folder is a good idea */


const port = process.env.PORT || 3000;

app.listen( port, err => {
    if( err ) throw err;

    console.log( 'Express Server is listening on port ' + port );
});
