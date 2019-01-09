const util = require( 'util' );

// multiple arguments may be passed - outputs to stdout
console.log( 'hello ', 'world' );

let guestCredentials = {
    duration: '30 minutes',
    wifi: {
        username: 'guest',
        password: 'guestw!f!'
    }
};

// the util.format() method can format strings
let formattedString = util.format( 'Hi %s! You are visitor number %d. Your guest credentials are %j', 'John', 22, guestCredentials );
console.log( formattedString );

// formatting can also be done directly in console methods
console.log( 'Hi %s! You are visitor number %d. Your guest credentials are %j', 'John', 22, guestCredentials );

// send output to stderr
console.error( 'Fatal: Query parameter missing' );

// log an object
let obj = {
    a: 1,
    b: {
        b_1: 2.1,
        b_2: {
            b_2_1: 2.21,
            b_2_2: 2.22
        }
    },
    c: [
        {
            name: 'John',
            age: 30
        },
        {
            name: 'Jane',
            age: 29
        }
    ]
};

let formattedObj;

formattedObj = util.inspect( obj );
console.log( 'obj formatted using util.inspect = ', formattedObj );

// we can also print a string representation of the object directly
console.log( obj );

// we can restrict objet stringification to any depth
formattedObj = util.inspect( obj, { depth: 1 } );
console.log( 'obj formatted using util.inspect (depth 1) = ', formattedObj );

// we can also print a depth-restricted string representation of the object directly using console.dir
console.dir( obj, { depth: 1 } );

function foo() {
    // console.trace() prints stack trace
    console.trace( 'foo called' );

    // You can calculate the time to execute a piece of code using console.time() and console.timeEnd()
    console.time( 'loop-timer' );
    for( let i = 0; i < 100000000; i++ ) {
        // do nothing
    }
    console.timeEnd( 'loop-timer' );
}

foo();