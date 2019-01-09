/**
 * Parent process can run child process in the background using detached mode. In Windows enables parent to exit without the child terminating. Parent process by default will wait for child to exit before it can exit - unreferencing the child  prevents this. In detached mode, the stdio streams cannot be inherited (but you can pass the fd directly as shown below)
 */
const { spawn } = require( 'child_process' );
const fs = require( 'fs' );

// const file = fs.createWriteStream( './output.txt' );

const child = spawn( 'node ./01-spawn-04-02-child.js', {
    detached: true,
    shell: true,
    stdio: [ 'ignore', 1, 2 ]
});

console.log( child.pid );

child.unref();