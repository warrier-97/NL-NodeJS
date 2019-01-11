const EventEmitter = require( 'events' );

/**
 * on(),
 * emit()
 */
class Stopwatch extends EventEmitter {
    constructor() {
        super();

        
    }
}

// const stopwatch = new Stopwatch();
// // verify it has inherited on() and emit() methods
// // console.log( stopwatch.__proto__.__proto__ );

// stopwatch.on( 'hi', function( arg1, arg2 ) { // Redux store.subscribe()
//     console.log( arg1, arg2 );
// });

// stopwatch.emit( 'hi', { x: 1 }, "hello" ); // What Redux does after it updates state