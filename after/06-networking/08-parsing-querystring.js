/**
 * The querystring module has methods for working with a querystring
 */
const qs = require( 'querystring' );

const amazonUrlQueryString = 'url=search-alias%3Daps&field-keywords=mobile+phone';

// *** deconstructing a querystring into query parameters ***
const parsedAmazonUrlQueryString = qs.parse( amazonUrlQueryString );
console.log( 'parsedAmazonUrlQueryString = ', parsedAmazonUrlQueryString );
console.log( 'parsedAmazonUrlQueryString["field-keywords"] = ', parsedAmazonUrlQueryString["field-keywords"] );

// *** constructing a querystring from an object with query parameters ***
constructedAmazonUrlQueryString = qs.stringify( parsedAmazonUrlQueryString );
console.log( 'constructedAmazonUrlQueryString = ', constructedAmazonUrlQueryString );