// Even json files can be required
// Note: Node first tries to resolve to .js extension, then .json - so the .json is needed in this case (not including the extension, this file and the json file share the same name)
let json = require( './05-require-json.json' );
console.log( json );