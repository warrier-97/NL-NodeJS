// searches node_module/ folders starting from current level and going up the filesystem path
let requiredModuleANamed = require( '02-required-module-a' );
let requiredModuleBNamed = require( '02-required-module-b' );

// the following line if executed will throw an error - uncomment it and check
// let requiredModuleCNamed = require( '02-required-module-c' );

// an absolute or relative path can be used too
let requiredModuleARelative = require( './02-required-module-a' );

console.log( 'requiredModuleANamed = ', requiredModuleANamed );
console.log( 'requiredModuleBNamed = ', requiredModuleBNamed );
console.log( 'requiredModuleARelative = ', requiredModuleARelative );