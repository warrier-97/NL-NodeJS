const fs = require( 'fs' );
const file = fs.createWriteStream( './big-file.txt' );

for( let i = 0 ; i < 1e6; i++ ) {
    file.write( 'Commodo ex qui proident incididunt et nostrud. Amet dolor qui commodo adipisicing adipisicing sit. Elit magna eiusmod labore nulla reprehenderit duis mollit elit id dolore quis reprehenderit consequat officia.' );
}

file.end();