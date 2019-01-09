/**
 * The body-parser middleware helps parse data passed in the request body. The data is made available under req.body. We can handle both JSON data as well as URL encoded data (other formats can also be handled but these are the commonly used ones). First install body-parser module.
 * ```
 * $ npm install --save body-parser
 * ```
 * 
 * The cookie parser middleware helps parse cookies sent from client. Install using, 
 * ```
 * $ npm install --save cookie-parser
 * ```
 * Exercise: Explore the cookie-parser functionality. Where are the parsed cookies available? How do you set a cookie in Express? Hint: Check https://expressjs.com/en/4x/api.html#res..
 * 
 * Instructions:
 * 1. Add body-parser and require it.
 * 2. Set up body parser middleware to parse both JSON data as well as URL encoded data in request body 
      ```
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: false }));
      ```
 * 3. Move the index page routing and products routing to 2 separate route files in a routes/ folder
 * 4. Create a /products route to handle POST requests. Load the products in memory at startup. Simulate a DB update by first creating a sequence generator function, calling it on receiving request, extracting product details from body and pushing to memory. Send a JSON reponse. If request is not in expected format send an error response (JSON format). Use status() to set status and json() to send json.
 */
