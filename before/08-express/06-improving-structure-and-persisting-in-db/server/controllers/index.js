function renderIndexPage( req, res, next ) {
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
}

module.exports = {
    renderIndexPage
};