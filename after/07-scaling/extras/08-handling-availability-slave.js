const http = require( 'http' );

const pid = process.pid;

let counter = 1;
const server = http.createServer( ( req, res ) => {
    process.stdout.write( `\rpid=${pid} count=${counter++}` );
    res.end( `Request handled by process with pid = ${pid}` );
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log( `process with pid = ${pid} listening on port ${port}\n` );
});

// simulate crash of worker process
setTimeout(() => {
    process.exit( 1 );
}, 10000);