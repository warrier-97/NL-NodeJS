/**
 * This example serves the requested file (file MUST be in this folder). A sample index.html file is present and it includes the front-end library - Lodash.
 * 
 * The bower tool can be used for installing any third-party bower module. A Bower component is a front-end library wrapped for Bower. It can work with the the [official bower registry](https://bower.io/search/), or a local bower registry (say, set up by a company), or even Git project hosting solutions, eg. GitHub. By default it is configured to work with the official bower registry.
 * Note: Bower modules include ONLY front-end libraries.
 * 
 * Instructions:
 * 1.1 Install bower using ```npm install -g bower```
 * 1.2 Initialize Bower for a project by executing ```bower init``` from the project root folder.
 * 1.3 From the same folder, install lodash using ```bower install --save lodash```
 * 2.1 Create an HTTP server and start it (make necessary require(s))
 * 2.2 Require the fs module - use readFile() to read a file from the current directory (use __dirname for this very script's path). Add a callback that gets err, data (data will be a Buffer object, i.e. raw bytes) - pass it as response (after converting Buffer object's to string using toString() of Buffer).
 * 3. Now Run this script and make an HTTP request for /index.html
 */