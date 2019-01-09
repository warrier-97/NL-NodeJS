# Reference for various topics


## Express
Express is a web application framework for Node.js. It simplifies the task of creating a web application using Node.js. It is in fact the standard server framework for Node.js. It is fast, unopinionated and a minimalist framework.


## Features
* Parsing of request
* Middleware that pre-process HTTP requests
* Routing
* Rendering using templates


## Setting up express
* The express node moodule can be installed using
```
$ npm install --save express
```

## Setting up express using Express Generator
* Express apps can instead be scaffolded using the Express Generator tool. This saves some time as it sets up basic application code. First install the Express Generator tool.
```
$ npm install -g express-generator
```

* To scaffold an app using Express Generator use
```
$ express --view=pug <name-of-your-app>
```
It creates a basic set of files and folders for the application inside a new folder (which has the same name as the name of your project) for the project, but does not install the dependencies it marks under package.json. The generated Express app is configured to work with the Jade view engine.

To install the dependencies run this from the generated project folder.
```
$ npm install
```

* To run the app in debug mode
Mac OSX or Linux
```
$ DEBUG=my-app:* npm start
```
In Windows
```
$ set DEBUG=my-app:* & npm start
```
Starting in debug mode prints log messages that begin with my-app: (this using the debug node module).

* To install the TypeScript type definition file for Express
```
npm install --save @types/express
```
Then reference it at the top of any Node.js file using
```
/// <reference path="<path>/<to>/node_modules/@types/express/index.d.ts" />
```
Here <path>/<to> refers to the path to node_modules/ folder.

* The NODE_ENV environment variable is assumed to be "development" is absent in the environment. Setting it to "production" will disable stack trace printing on errors (in the default app that is generated).

## Express objects
There are 4 main objects in Express.
1. Application - one project can have multiple application objects. The application object is created by calling the express() method.
2. Request - Represents HTTP request
3. Response - Represents HTTP response
4. Router - An object that configures routing for the application (a "controller" in web development terms) - there is only one router per application. It is retrueved using express.Router() where express is the express module.

## Middleware
Express pre-processes requests via middleware. Middleware is a function that receives the request, response objects and a next() method to be called when the middleware's job is done. Calling next() triggers execution of next middleware in the sequence.  

A middleware is added using the app.use() or app.<method>() methods (here <method> is get|post|put|delete|...). The first argument is an optional route base path that should trigger the middleware - if this is not provided the middleware is called for each request. A middleware can accept either err, req, res and next, or simply req, res and next.  If use() is called, Express executes the middleware for any HTTP method (subject to path match), else only for the matching method (eg. get() will be triggered for only HTTP GET requests).  

Middleware can be  
* Application-level middleware - added using app.use() and app.<method>() where app is an instance of express (returned by express() call).
* Router-level middleware - added using router.use() and router.<method>()
* Error-handling middleware - to handle the request in case no app/router middleware completed the request by sending a response.
* Built-in middleware - example express,static(), express.json()
* Third-party middleware - body parser, cookie parser etc.


## Templating
View engines combine HTML stucture with data to produce views at run-time. We can use view engines like Pug (formerly Jade), handlebars or EJS with Express. Here, we use Pug. To install pug execute
```
$ npm install --save pug
``` 


## References
* [Express site](https://expressjs.com)
* [Using the Express Generator](https://expressjs.com/en/starter/generator.html)
* [Commonly used Express middleware](http://expressjs.com/en/resources/middleware.html)
* [Steps to install the type definition file](https://www.npmjs.com/package/@types/express)
* [Pug site](https://pugjs.org/)