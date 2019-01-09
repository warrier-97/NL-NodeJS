/**
 * require.resolve() does not execute the required module - it simply checks for its existence. It throws an error if the module is not found.
 */
// Try making this and plain require and check main and cache properties in modules a and b
require.resolve( './04-require-a' );

// the following line if executed will throw an error - uncomment it and check
// require.resolve( './04-require-c' );

/**
 * require.main is the main module (launched by node CLI)
 */
console.log( '*** [inside module b] require.main ***' );
console.log( require.main );

/**
 * require.cache is a cache of loaded node modules
 */
console.log( '*** [inside module b] require.cache ***' );
console.log( require.cache );