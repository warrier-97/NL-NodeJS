const express = require( 'express' );
const path = require( 'path' );
const multer = require( 'multer' );

const app = express();

app.use( express.static( path.join( __dirname, 'public' ) ) );

const storage = multer.diskStorage({
    destination: function( req, file, cb ) {
        cb( null, path.join( __dirname, 'uploads', file.fieldname ) );
    },
    filename: function( req, file, cb ) {
        cb( null, req.body.username + '-' + file.originalname );
    }
});

function fileFilter( req, file, cb ) {
    const fieldname = file.fieldname, extension = path.extname( file.originalname );

    if( fieldname === 'resume' ) {
        return cb( null, extension.toUpperCase() === '.PDF' );
    }

    const allowedExtensions = [ '.JPG', '.JPEG', '.PNG', '.TIFF' ];
    if( fieldname === 'portfolio' ) {
        return cb( null, allowedExtensions.indexOf( extension.toUpperCase() ) !== -1 )
    }
}

// const upload = multer({ dest: 'uploads/' })
const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

const uploadHandler = upload.fields(
    [
        { name: 'resume', maxCount: 1 },
        { name: 'portfolio', maxCount: 4 }
    ]
);

app.post( '/profile', uploadHandler, function( req, res ) {
    console.log( req.body );
    console.log( req.files );

    res.status( 200 ).send({
        message: 'Your details were successfully saved'
    });
});

const PORT = process.env.PORT || 3000;

app.listen( PORT, err => {
    if( err ) {
        console.log( err.message );
        throw err;
    } 

    console.log( 'Check http://localhost:' + PORT );
});