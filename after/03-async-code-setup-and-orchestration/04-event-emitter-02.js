const EventEmitter = require( 'events' );

class Stopwatch extends EventEmitter {
    constructor() {
        super();
        this.startTime = null;
        this.state = 'not running';
    }

    start() {
        if( this.state === 'not running' ) {
            this.startTime = new Date();
            this.state = 'running';
            this.emit( 'start', this.startTime );
        }
    }

    stop() {
        if( this.state === 'running' ) {
            this.startTime = null;
            this.state = 'not running';
            this.emit( 'stop', new Date );
        }
    }

    getElapsedTimeInSeconds() {
        this.emit( 'probe', new Date );
        return ( ( new Date() ).getTime() - this.startTime.getTime() ) / 1000;
    }
}

let stopwatch = new Stopwatch();

// set event handlers
stopwatch.on( 'start', ( startTime ) => console.log( 'stopwatch started at ' + startTime ) );
stopwatch.on( 'stop', ( stopTime ) => console.log( 'stopwatch stopped at ' + stopTime ) );

let probeHandler = ( probeTime ) => console.log( 'stopwatch probed at ' + probeTime );
stopwatch.on( 'probe', probeHandler );

console.log( typeof probeHandler );
// start the stopwatch and and monitor progress
stopwatch.start();

let intervalId = setInterval(() => {
    console.log( stopwatch.getElapsedTimeInSeconds() );
}, 1000 );

// remove probe event handler after some time
setTimeout( () => {
    stopwatch.removeListener( 'probe', probeHandler );
}, 5000 );

// stop the stopwatch after some time
setTimeout( () => {
    clearInterval( intervalId );
    stopwatch.stop();
}, 10000 );