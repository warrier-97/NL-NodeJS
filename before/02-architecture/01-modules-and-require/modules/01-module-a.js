/**
 * The only global variable in node is a variable called global - this is the equivalent of the window object in a browser.
 * 
 * Again, in Node, every file is a "module" - the variables declared inside a module are local to the module unless exported, or added to the global object.
 * 
 * Instructions:
 * 1.1 Declare few variables in this module and log these
 * 1.2 Create some new properties on the global object called "global" and log these
 * 
 * 2. The special local object called "module" is different for different modules. It has a property called exports - module.exports is "return value" of the require function. Set module.exports to an object - Log the module object before and after setting up module.exports
 * 
 * Exercise:
 * There is also another special reference local to a module called exports - this is set to module.exports. Explore this.
 * Reference: https://stackoverflow.com/questions/16383795/difference-between-module-exports-and-exports-in-the-commonjs-module-system/16383925#16383925
 */

console.log( '\n*** module01 execution starts ***' );

// *** start writing code after this line ***





// *** end your code before this line ***

console.log( '*** module01 execution ends ***\n' );