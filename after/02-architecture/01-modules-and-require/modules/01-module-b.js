/**
 * The only global variable in node is a variable called global - this is the equivalent of the window object in a browser.
 * 
 * Again, in Node, every file is a "module" - the variables declared inside a module are local to the module unless exported, or added to the global object.
 */

 // The './' is required to import the module since it does not lie within node_modules/ folder

console.log( '\n*** module02 execution starts ***' );

let module01 = require( './01-module-a' );

console.log( `global = ${global}` );
console.log( `module01 = `, module01 );
console.log( `module01.x = ${module01.x}` );
console.log( `module01.y = ${module01.y}` );
console.log( `global.z = ${global.z}` );

// Note that the module object is local and hence different for different modules
console.log( '*** module ***' );
console.log( module );

console.log( '*** module01.module ***' );
console.log( module01.module );

console.log( '*** module02 execution ends ***\n' );