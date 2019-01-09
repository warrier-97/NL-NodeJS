const passport = require( 'passport' );
const LocalStrategy = require( 'passport-local' ).Strategy;
const request = require( 'request' );
const httpStatus = require( 'http-status' );

passport.use(
    new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password'
        },
        ( username, password, done ) => {
            let user = {
                username: username,
                password: password
            };

            request.post(
                {
                    url: 'http://127.0.0.1:3000/api/auth/isregistered',
                    json: true,
                    body: user
                },
                function (error, response, body) {
                    let userNew = body;

                    if( error ) {
                        // an internal error occured
                        done( new Error( 'Error while trying to login user' ) );
                    }
                    if( !error && response.statusCode == httpStatus.OK ) {
                        done( null, userNew );
                    } else {
                        // incorrect username-password combination - passing false redirects to the failure route
                        done( null, false, { message: 'Incorrect username-password combination' } );
                    }
                }
            );
        }
    )
);