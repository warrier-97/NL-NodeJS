/**
 * The url module has methods for working with a url
 */
const url = require( 'url' );

const amazonUrl = 'https://www.amazon.com/s/ref=nb_sb_noss_2/142-7243337-9964265?url=search-alias%3Daps&field-keywords=mobile+phone';

// *** deconstructing a url into an object with parts of a URL ***
// the second argument is optional - passing true created a parsed querystring sub-object called query (else query is the plain querystring)
const parsedAmazonUrl = url.parse( amazonUrl, true );
console.log( 'parsedAmazonUrl = ', parsedAmazonUrl );
console.log( 'parsedAmazonUrl.hostname = ', parsedAmazonUrl.hostname );
console.log( 'parsedAmazonUrl.query["field-keywords"] = ', parsedAmazonUrl.query['field-keywords'] );

// *** constructing a url from an object with parts of a URL ***
constructedAmazonUrl = url.format( parsedAmazonUrl );
console.log( 'constructedAmazonUrl = ', constructedAmazonUrl );