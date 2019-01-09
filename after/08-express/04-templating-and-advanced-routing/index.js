/** 
 * View engines combine HTML stucture with data to produce views at run-time.
 * 
 * We can use view engines like Pug (formerly Jade), handlebars or EJS with Express. Here, we conrast use of Pug and EJS.
 * To install pug execute ```npm install --save pug```
 * To install ejs execute ```npm install --save ejs```
 * 
 * Note: app.set() can be used to set any key-value pairs to be used across the application. However, some of the keys have a special meaning - for example, the key 'views' represents 
 * 
 * // Step 0: Create the .pug/.ejs template file
 */
/// <reference path="../../../node_modules/@types/express/index.d.ts" />
/// <reference path="../../../node_modules/@types/express-serve-static-core/index.d.ts" />

const express = require( 'express' );
const http = require( 'http' );
const path = require( 'path' );

const data = require( './data/seed.json' );

const app = express();

app.use( express.static( 'public' ) );

// Step 1: Set the folder with for views with the 'views' key
app.set( 'views', './views' );
// Step 2: Set the view engine using the 'view engine' key (try both pug and ejs)
// app.set( 'view engine', 'pug' );
app.set( 'view engine', 'ejs' );

app.get( '/', ( req, res ) => {
    res.set( 'content-type', 'text/html' );
    res.send( `
        <html>
            <body>
                This is the products server.
                <br />
                Hit <a href="/products">/products</a> to see the product catalog.
                <br />
                Hit <a href="http://localhost:3000/products?format=json">/products?format=json</a> to get a JSON with product details.
            </body>
        </html>` 
    );
});

app.get( '/products', ( req, res ) => {
    // Step 3.2: Extractquery string parameters from req.query
    if( req.query && req.query.format && req.query.format === 'json' ) {
        // Step 3.3: Render json by calling json() - pass data if any as the second argument 
        res.json( data.products );
    }
    // Step 3.3: Render the view by calling render() - pass data if any as the second argument 
    res.render( 'products', {
        data: data,
        title: 'Product Catalog'
    });
});

app.get( '/products/:id', ( req, res, next ) => {
    // Step 3.2: Extract path fragments from req.params
    const id = parseInt( req.params.id );
    
    if( isNaN( id ) ) {
        next();
    }
    
    // Step 3.3: Render the view by calling render() - pass data if any as the second argument 
    const product = data.products.find( ( product ) => product.id === id );
    res.render( 'product', {
        product: product,
        title: product.name
    });
});

const port = process.env.PORT || 3000;

app.listen( port, err => {
    if( err ) throw err;

    console.log( 'Express Server is listening on port ' + port );
});
