const EventEmitter = require( 'events' );

function sumAsync( a, b ) {
    let eventEmitter = new EventEmitter();

    if( typeof a !== 'number' || typeof b !== 'number' ) {
        // 'error' is a special event of an EventEmitter object - the node process will exit if you don't handle
        process.nextTick( 
            () => eventEmitter.emit( 'error', new TypeError( 'not all arguments are numbers' ) ) 
        );
        return eventEmitter;
    }

    // start will never fire - why?? and what is a solution to this problem?
    eventEmitter.emit( 'start', new Date );
    setTimeout( () => {
        eventEmitter.emit( 'sum', a + b );
        eventEmitter.emit( 'end', new Date );
    }, 1000);

    return eventEmitter;
}

let resultEmitter;
try {
    resultEmitter = sumAsync( 1, 2 );
} catch( err ) {
    console.error( 'Error : ', err );
}

// start does not fire as event was emitted before sumAsync returned!
resultEmitter.on( 'sum', ( sum ) => console.log( 'sum = ', sum ) );

resultEmitter.on( 'start', ( time ) => console.log( 'start time = ', time ) );

// end event handler - we add a listener and remove it before the sum can be calculated (i.e. within a second)
let onEnd = ( time ) => console.log( 'end time = ', time );
resultEmitter.on( 'end', onEnd );
setTimeout( () => resultEmitter.removeListener( 'end', onEnd ), 250 );


// comment the following and check that node exits with an exception
resultEmitter.on( 'error', function( err ) { console.log( 'error occured' ); } );