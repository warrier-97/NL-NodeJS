/**
 * Instructions:
 * 1. Install the npm package "body", saving it as a project dependency - it parses the HTTP request body and makes it available under req.body property.
 * ```npm install --save body```
 * 2. Require the 'http' and 'body/any' modules
 *      NOTE: In the rest of demos the "require" step will be implied)
 * 3.1 Create a server - within it call the any module function, passing it the req, res, (empty) options object and a callback that receives err and body.
 * 3.2 Send a response with name and city property extracted from body
 * 4. Start the server on a specified port
 * 
 * Note:
 * You require an HTTP client like Postman app (available as Chrome app too) to perform POST requests. The POSTed data can be normal form data (application/x-www-form-urlencoded) or JSON data (application/json) - body will detect each of these 'Content-Type's and parse accordingly. 
 */