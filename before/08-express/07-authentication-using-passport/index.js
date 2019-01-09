/**
 * Instructions:
 * 1. In /api, add User model with username and password. Add routes for GET and POST /users, and POST /isregistered. Write controller methods for these. Controller code for handling /isregistered should return a JSON with user details if user is present. On incorrect details it return error JSON with status code 403. On any other error, it returns 404.
 * 2. We clean up code a bit more here. Arrange initialization code in different files - number them in order of execution for clarity
 *    a) 01-deseed.js for dropping db
 *    b) 02-db.js with DB initialization
 *    c) Then create the express app object
 *    d) 03-middleware.js to setup body-parser, cookie-parser, express-session - pass { secret: <secret> } to session() middleware, and static file server middleware. The session secret should ideally be set as an environment variable (DO NOT FORGET TO DO THIS WHEN RUNNING THE APP) - again as a best practice, throw an error if this is not set. Put all this code within a function (closure) that accepts app object and export it. This technique is used wherever app object is required by initialization code.
 *    e) Setup templating in 04-template.js
 *    f) Setup Passport in 05-passport.js. This is explained in detail below.
 *    g) Setup routes in 06-routes.js ('/ '/auth', '/products', '/api/products', '/api/auth'
 *    h) Setup seed data in 07-seed.js. If you use native http request (ClientRequest), then post data using
 *          ```
 *          request.setHeader('Content-Type', 'application/json');
 *          request.write( JSON.stringify( products ) );
 *          request.end();
 *          ```
 *    i) Setup code to start server 08-start-server.js
 * 
 * Setting up Passport:
 *      - Setup initialization and session handling middleware (passport.initialize() and passport.session()). Then setup methods that will serialize user details to and from session details.
 *         ```
 *         app.use(passport.initialize());
 *         app.use(passport.session());
 *
 *         passport.serializeUser( ( user, done ) => {
 *             done( null, user );
 *         });
    
 *         passport.deserializeUser( ( user, done ) => {
 *             done( null, user );
 *         });
 *         ```
 *      - Finally set the strategy up - we use local authentication. Do this in a script inside strategy folder. This is so that we can switch to or between strategies easily if required so in future. Include passport-local module and setup a Strategy() object as middleware. Stragey constructor takes as arguments
 *          i) { usernameField: 'user_name_field_in_incoming_request', passwordField: 'password_field_in_incoming_request } and a callback that gets passed username, password and done(). To simplify POST request to be made to /auth/isregistered use third-party module called 'request' and use request.post() passing url, json: true and body: { username: username, password: password }. On error, call done with error. If login was unsuccessful, call done( null, false, { message: message } ) which redirects user to failure redirection route with the message. On sucess call done( null, userObject ).
 *      - Create login.ejs page with login and password input. Submit form to /auth/login
 *      - Create register.ejs page with login and password input. Submit form to /auth/register
 *      - Set route for POST /login - set 2 middlewares in this call
            * passport.authenticate( 'local', { failureRedirect: '/auth/login-page' } ), 
            * login middleware function defined in a controllers/auth.js file (Note: This is called only on success of the passport middleware - therefore we create a profile-page and simply redirect user to /profile-page here - use res.redirect( url ))
            * Note: Passport adds user details on req.user once it authenticates successfully.
        - Set route for GET /login-page, GET /registration-page, GET /profile-page, POST /register
          For GET /login-page controller checks if user has logged in and redirects to profile-page if logged in, else login page is rendered. For POST /register use request module's post() method to call /api/auth/users, passing json: true, body: req.body (i.e. forward username, password) and headers: req.headers.cookie (forward incoming request cookies). If error on request.post, call next with error object. On successful post and user registration, automatically log user using the passport method req.login( user, callback ). On successful login, redirect user to profile-page, else call the next piece of middleware. On successful post but unsuccessful user creation simply call the next piece of middleware (Exercise: make this experience better by displaying an unsuccessful registration message on registration page)
 *      Also create a utility method authenticate middleware that checks for req.user and redirects user to login page if not authenticated. Else it does nothing and passes control to next middleware. This is useful at many places. To restrict any page to authenticated users, set this as a middleware for the corresponding route - use router.route( path ).all( authenticate ) to do this in a simple fashion for all methods on a route. Use router.use( authenticate ) to set up authentication for all routes handled by a router - do so for products router.
 * 
 * Note:
 * 1. A similar strategy for authentication can be used for API. When we do so however, at least one username, password has to be seeded separately (via backend) to handle seeding of data (this user is used by seed data).
 * 2. We have not salted and encrypted the password. This is required in a real application.
 */