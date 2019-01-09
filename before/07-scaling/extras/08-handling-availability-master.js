/**
 * We can maintain high availability by restarting a slave automatically when it crashes. It is however best to chek that the worker dd not exit normally before restarting. 
 */
const cluster = require( 'cluster' );
const os = require( 'os' );

if( cluster.isMaster ) {
    let numCores = os.cpus().length;

    console.log( `Creating ${numCores} slave processes` );
    for( let i = 0; i < numCores; i++ ) {
        cluster.fork(); // note this is not child_process module's fork()
    }

    // cluster object is an event emitter
    // the exit event fires when the slave process exits
    cluster.on( 'exit', ( worker, code, signal ) => {
        // check that the worker did not exit normally and only then restart
        // exitedAfterDisconnect will be true if the master disconnected itself from the slave - we aren not doing so right now, but this piece of code keeps this snippet future-proof
        if( code !== 0 || !worker.exitedAfterDisconnect ) {
            console.log( `Worker ${worker.id} crashed. Starting a new worker` );
            cluster.fork();
        }
    });
} else { // if cluster.isWorker
    require( './08-handling-availability-slave.js' ); // we require and don't exec() in order to run the server in the very same process
}