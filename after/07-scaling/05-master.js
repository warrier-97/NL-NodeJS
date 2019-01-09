const cluster = require( 'cluster' );
const os = require( 'os' );

if( cluster.isMaster ) {
    let numCores = os.cpus().length;

    console.log( `Creating ${numCores} slave processes` );
    for( let i = 0; i < numCores; i++ ) {
        // note this is not child_process module's fork() but a wrapper around it
        // it returns a worker object
        cluster.fork();
    }
} else { // if cluster.isWorker
    require( './05-server' ); // we require and don't exec() in order to run the server in the very same process
}