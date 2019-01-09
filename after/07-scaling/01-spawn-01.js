/**
 * spawn() executes a command in a child process. It is used for executing well-known commands that Node.js can resolve against the system path.
 * 
 * To execute scripts we usually use execFile()
 * 
 * Note:
 * 1. The child process stdin is a writable stream in the parent process.
 * 2. The child process stdout and stderr are readable streams in the parent process.
 * 3. spawn() DOES NOT create a shell - this is why the command and the arguments are passed separately to spawn().
 * 4. Data is passed as and when it is generated - its is preferable to use spawn when output is potentially large.
 * 4. Data is passed as and when it is generated - its is preferable to use spawn when output is potentially large.
 */
const { spawn } = require( 'child_process' );

// The arguments to the command are passed as an argument array (2nd argument) to spawn()
// spawn returns a child process object
const child = spawn( 'ls', [ '-al' ] );

// being a process object it has access to stdin, stdout and stderr
child.stdout.on( 'data', ( data ) => {
    console.log( 'child process stdout :\n', data.toString() );
});

child.stderr.on( 'data', ( data ) => {
    console.error( 'child process stderr :\n', data.toString() );
});

// exit event is fired when the child process exits. signal is null if child process exits normally.
// another important event fired on child process is the message event - it is fired when the child process calls process.send() - this is how parent-child processes communicate with each other
child.on( 'exit', ( code, signal ) => {
    console.log( `child process exited with code ${code} and signal ${signal}` );
});