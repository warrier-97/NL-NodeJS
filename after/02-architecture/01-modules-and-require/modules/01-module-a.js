/**
 * The only global variable in node is a variable called global - this is the equivalent of the window object in a browser.
 * 
 * Again, in Node, every file is a "module" - the variables declared inside a module are local to the module unless exported, or added to the global object.
 */

console.log( '\n*** module01 execution starts ***' );

var x = 1, y = 2;
global.z = 3;

console.log( `global = ${global}` );
console.log( `x = ${x}` );
console.log( `y = ${y}` );
console.log( `global.z = ${global.z}` );

// The special local object called "module" is different for different modules. It has a property called exports - module.exports is "return value" of the require function. 
console.log( '*** module (before setting up exports) ***' );
console.log( module );

module.exports = {
    y: y,
    module: module
};

console.log( '*** module (after setting up exports) ***' );
console.log( module );

console.log( '*** module01 execution ends ***\n' );

/**
 * Exercise: Explore the following.
 * 
 * There is also another special local reference called exports - this is set to module.exports
 * Reference: https://stackoverflow.com/questions/16383795/difference-between-module-exports-and-exports-in-the-commonjs-module-system/16383925#16383925
 */