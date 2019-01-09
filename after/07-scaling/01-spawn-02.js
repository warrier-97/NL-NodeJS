/**
 * Note:
 * 1. The child process stdin is a writable stream in the parent process.
 * 2. The child process stdout and stderr are readable streams in the parent process.
 * 3. spawn() DOES NOT create a shell.
 * 4. Data is passed as and when it is generated.
 */
const { spawn } = require( 'child_process' );

const ls = spawn( 'find', [ '.', '-type', 'f' ] );
const wc = spawn( 'wc', [ '-w' ] );

ls.stdout.pipe(wc.stdin);

wc.stdout.on( 'data', ( data ) => {
    console.log( 'wc process stdout :\n', data.toString() );
});

wc.stderr.on( 'data', ( data ) => {
    console.error( 'wc process stderr :\n', data.toString() );
});