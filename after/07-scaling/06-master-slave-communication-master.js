/**
 * Because cluster module uses fork() under-the-hood, the master and the slaves can communicate with each other using process.send() and process.on().
 * 
 * We illustrate a simple broadcast here from master to slaves to avoid multiple DB request. Consider an app like cricinfo which publishes latest scores of an ongoing match. Instead of making multiple DB requests per slave (as and when HTTP requests are received), we can make one HTTP request in the master in a set time interval and communicate it to all slaves.
 */
const cluster = require( 'cluster' );
const os = require( 'os' );

// This is a mock DB request
function getMatchScore() {
    this.score = this.score || 0;
    this.score += Math.floor( Math.random() * 7 );
    return this.score;
}

if( cluster.isMaster ) {
    let numCores = os.cpus().length;

    console.log( `Creating ${numCores} slave processes` );
    for( let i = 0; i < numCores; i++ ) {
        cluster.fork();
    }

    console.log( '*** cluster.workers ***' );
    console.dir( cluster.workers );
    console.dir( cluster.workers[1].process.pid ); // child process object

    for( let prop in cluster.workers ) {
        let worker = cluster.workers[prop];
        worker.send( 'Hello worker ' + worker.id );
    }

    function updateWorkers() {
        let score = getMatchScore();
        for( let prop in cluster.workers ) {
            let worker = cluster.workers[prop];
            worker.send({
                score: score
            });
        }
    }

    updateWorkers();
    setInterval( updateWorkers, 10000 );
} else {
    require( './06-master-slave-communication-slave.js' );
}