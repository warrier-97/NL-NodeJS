console.log( '*** Inside module a ***' );

/**
 * require.main is the main module (launched by node CLI)
 */
console.log( '*** [inside module a] require.main ***' );
console.log( require.main );

/**
 * require.cache is a cache of loaded node modules
 */
console.log( '*** [inside module a] require.cache ***' );
console.log( require.cache );