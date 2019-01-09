/**
 * spawn() and fork() are similar
 * However when forking, a communication channel is established between parent and child processes and the communicate using send() method (of process object)
 * An object is to be passed as message when calling send()
 */
const { fork } = require( 'child_process' );

const child = fork( './04-fork-01-child.js' );

child.on( 'message', msg => {
    console.log( 'Message from child : ', msg );
});

child.send({
    greeting: 'Hello'
});

process.once( 'SIGINT', () => { // SIGINT is fired when Ctrl + C is keyed in the terminal
    console.log( 'exiting parent process' );
});