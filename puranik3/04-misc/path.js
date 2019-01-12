const path = require( 'path' );

//const dataFolderPath = path.resolve( __dirname, 'data' );

// Specific to Linux, Mac
__dirname + '/data'

// Cross-platform compatible
const dataFolderPath = path.join( __dirname, '../..', 'data' );
console.log( dataFolderPath );

const pathParts = path.parse( __filename );
console.dir( pathParts );