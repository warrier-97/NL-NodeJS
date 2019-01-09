/**
 * You can even inherit from EventEmitter so that your class's object can also emit events
 * 
 * Instructions:
 * 1. Create a stopwatch instance, setup the 'start', 'stop' and 'probe' handlers for it, and start the stopwatch instance.
 * 2. Call getElapsedTimeInSeconds() every second for 10 seconds (use setInterval() and clearInterval()). Also stop the stopwatch when clearing the Timer using clearInterval.
 * 3. Remove the probe handler after 5 seconds (i.e. before the stop watch can stop. 
 */
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