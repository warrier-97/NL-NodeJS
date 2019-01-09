/**
 * Triggers a GET request to an endpoint described using passed options
 * @param {object} options 
 *                 @param options.url {string} URL of server
 *                 @param options.success {function} Success callback
 */
function get( options ) {
    console.log( '** get() called **' );
    
    // logic for issuing GET request
    
    // and on success...
    success({
        "message": "ok"
    });
}

/**
 * Triggers a PUT request to an endpoint described using passed options
 * @param {object} options 
 *                 @param options.data {object} Data to be posted
 *                 @param options.url {string} URL of server
 *                 @param options.success {function} Success callback
 */
function put( options ) {
    console.log( '** put() called **' );
    
    // logic for issuing PUT request 
    
    // and on success...
    success({
        "message": "ok"
    });
}

/**
 * Triggers a POST request to an endpoint described using passed options
 * @param {object} options 
 *                 @param options.data {object} Data to be posted
 *                 @param options.url {string} URL of server
 *                 @param options.success {function} Success callback
 */
function post( options ) {
    console.log( '** post() called **' );
    
    // logic for issuing POST request
    
    // and on success...
    success({
        "message": "ok"
    });
}

/**
 * Triggers a DELETE request to an endpoint described using passed options
 * @param {object} options 
 *                 @param options.url {string} URL of server
 *                 @param options.success {function} Success callback
 */
function del( options ) {
    console.log( '** del() called **' );

    // logic for issuing DELETE request

    // and on success...
    success({
        "message": "ok"
    });
}

module.exports = {
    get,
    put,
    post,
    del
};