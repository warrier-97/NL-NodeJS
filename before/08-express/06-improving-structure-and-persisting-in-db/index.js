/**
 * Data from database is usually made available to the client via a web API. A REST API is the popular way to expose services. We will create an API to serve products stored in a Mongo DB database. We will use the API anytime we need data within the application. So parts of application that need the data will need to make an HTTP request too.
 * Note: We shall use Mongoose library to handle connections and CRUD operation - this provides extra features when compared to the plain Mongo DB driver for Node. For example, model validations at the time of inserts and updates via Mongoose schema.
 *  
 * Instructions:
 * 1. Create a config JSON file to hold application details like 
 *    a) app details like baseUrl and port
 *    b) API details like baseUrl, port and API path prefix. Note that since we are not creating a separate API server, baseUrl and port will be same as that of app.
 *    c) DB connection details like protocol ("mongodb"), username, password, DB server URL, port, db name.
 * 2. Create an /api folder to house /models for the API. Add a Mongoose schemas for product data under models/ folder. Use mongoose.Schema() and pass it an schema configuration object. The keys are the corresponding document's paths (i.e. field names in RDBMS terminology). The keys have objects as value -- their properties are type (String | Number | Date | Schema | etc...), required, min, max, enum etc. The enum is configured providing an object with values (array), required, message (issued on error) properties etc. Then create a Mongoose model using mongoose.model( name, schema_config_object ). Make sure to export the model and also schema if necessary.
 *  3. Write an init module to performs the following initialization
 *    a) Create a seed.js script to remove data from DB or drop it altogether using ```mongo product-catalog --eval "db.dropDatabase()"``` - you can exec() this. Can this script during initialization.
 *    b) Construct dbUri of the form ```protocol://server:port/.db```
 *    c) Connect to Mongoose using mongoose.connect( dbUri );
 *    d) Handle mongoose.connection events liked 'connected', 'disconnected' and 'error'.
 *    e) Require the model file(s) to create the model(s). 
 * 4. Add /routes, /controllers to the /api folder. Add API router paths for product related routing. They execute controller methods. 
 * 5. Inside the product API controller you will need to define chained methods to handle various CRUD routes. Use mongoose methods to do DB operations - Collection.method, where method is one of find( conditionsObject ) to find based on a condition (or pass none to get all), findById( id ) to find based on _id path value (primary key), sort( string ) to sort based on field(s) mentioned, select( string ) to get a projection (subset of paths separated by spaces), create( instanceConfig, callback ) to create a new document in the DB, findByIdAndRemove( id ) to . In order to do a DB update, use findById() to first retrieve the product, then use _.assign to update the returned product, and finally call product.save() - note this is a model instance method and not a mongoose model method (i.e. this is not a static method like the rest). You can create a utility method for sending response message as JSON. Install and require http-status for response code constants. Send appropriate status codes and messages - make sure to handle all possible error cases. Some status codes are 200 (ok), 201 (created), 204 (no content), error (404), 403 (bad request) and 500 (internal server error).
 * 4. Create /server folder to house /routes, /controllers, and /views for web pages.
 * 5. Add views for product list and detail pages, and a 404 page.
 * 6. Add router module for index and products related views. DO NOT render directly inside the route handlers. Add controller/ files with methods for handling access to data via API and rendering views using data received.
 * 7. Use http module's request() to make API calls - it requires a config object with method, hostname, port, path - get these from config.json. Therefore we need to buffer response inside of a request.once( 'response' ) handler using response.on( 'data' ) which receives a chunk of data. Also handle request.on( 'error' ). In response.on( 'end' ) handler you can parse the JSON response, and send the rendered products list/product detail page. If you wish to use a simple HTTP request API, use the third-party node module 'request'.
 * 8. Add app and API routing as application middleware.
 * 9. Add error handling middleware
 * Start the server.  
 * 11. Write a script to add seed data (i.e. initialize the DB with data on startup). Read seed data and make requests to the API to add data. Execute it after routing is set up.
 */