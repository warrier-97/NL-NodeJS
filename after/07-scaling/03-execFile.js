/**
 * Note:
 * 1. execFile() is used to run an executable file.
 * 2. execFile() DOES NOT create a shell - it executes the given command/file - in Windows, .bat files cannot be executed with execFile() - exec() or spawn() with shell set to true is required for this.
 */
const { execFile } = require( 'child_process' );

execFile( 'node', [ '--version' ], ( err, stdout, stderr ) => {
    if( err ) {
        console.error( 'execFile error : ', err );
        console.error( 'child process stderr : ', stderr.toString() );
        return;
    }

    console.log( 'child process stdout (node version) : ', stdout );
});

execFile( './count-files.sh', ( err, stdout, stderr ) => {
    if( err ) {
        console.error( 'execFile error : ', err );
        console.error( 'child process stderr : ', stderr.toString() );
        return;
    }

    console.log( 'child process stdout (number of files) : ', stdout );
});