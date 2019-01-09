/**
 * Instructions:
 * 1. Install the express type definition files for express
 *    ```npm install --save-dev @types/express```
 * 2. Add path to type definition files on top of page to get Intelllisense
 *    /// <reference path="/path/to/type/definition/file" />
 * 3. Require express, http and path modules
 * 4. Create an express object called app, say. An express project can be divided into sub-applications - there can thus be multiple such express() calls to create multiple app objects - but usually we have only one. Reference: https://derickbailey.com/2016/02/17/using-express-sub-apps-to-keep-your-code-clean/
 * 5. Handle routes '/' and '/about to serve index.html and about.html - use res.sendFile()
 * 6.1 http.createServer() passing the app object and start server
 * (or)
 * 6.2 Call app.listen() to start server 
 */