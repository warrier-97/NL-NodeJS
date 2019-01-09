// details about the process running node
console.dir( '*** process ***' );
console.dir( process );

// environment variables (readonly)
console.dir( '*** process.env ***' );
console.dir( process.env );

console.dir( `process.env.PORT (before attempt to change) is ${process.env.PORT}` );
process.env.PORT = "4000";
console.dir( `process.env.PORT (after attempt to change) is ${process.env.PORT}` );

// Exercise: Check out the PORT environment variable - it would not have changed

// standard input, output and error streams can be accessed via process
console.dir( '*** process.stdin ***' );
console.dir( process.stdin );

console.dir( '*** process.stdout ***' );
console.dir( process.stdout );

console.dir( '*** process.error ***' );
console.dir( process.stderr );