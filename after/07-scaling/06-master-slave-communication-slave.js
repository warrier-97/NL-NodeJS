const http = require( 'http' );

const pid = process.pid;

let score;
const server = http.createServer( ( req, res ) => {
    res.end( `${score}` );
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log( `process with pid = ${pid} listening on port ${port}\n` );
});

process.on( 'message', msg => {
    console.log( 'Received message from master : ' );
    console.dir( msg );

    score = msg.score || score; // update score if it was present in received message
});