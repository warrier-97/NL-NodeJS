/**
 * spawn() and fork() are similar
 * However when forking, a communication channel is established between parent and child processes and the communicate using send() method (of process object)
 * An object is to be passed as message when calling send()
 */
process.on( 'message', msg => {
    console.log( 'Message from parent : ', msg );
});

process.once( 'SIGINT', () => {
    console.log( 'exiting child process' );
});

let i = 1;
setInterval(() => {
    process.send({
        counter: i++
    });
}, 1000);