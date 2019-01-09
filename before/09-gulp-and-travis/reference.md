# Reference for various topics

## Front-end web development tasks
Front-end web development has become complex and there are many tasks to be run on code before it is production-ready. Some of the tasks are.
- Linting
- Transpilation
- Minification of JS, CSS
- Injection of JS, CSS in HTML  

Doing these tasks manually each time is time-consuming.

## Tools for tasks to be run
Each of these tools is available as an npm module
- JSHint: checks for code quality
    * Detects potential errors
    * Enforces coding conventions
    * Download configuration file from https://github.com/jonathanfmills/CodingStandards
    * Available as a plugin for popular editors including VSCode
    * The npm module is jshint
    * To use within Gulp however, we need the another npm module that is a wrapper for use in Gulp - gulp-jshint
    * We additionally use gulp-jscs-stylish, which is a reporter for jshint's output.
- JSCS: checks for code style
    * Enforces style conventions
    * Download configuration file from https://github.com/jonathanfmills/CodingStandards
    * Available as a plugin for popular editors including VSCode
    * The npm module is jscs
    * To use within Gulp however, we need gulp-jshint.
    * We additionally use jshint-stylish, which is a reporter for jshint's output.
- wiredep
    * Injects Bower component JS and CSS files into HTML documents
    * It works only with Bower components though
    * It looks into the dependencies as well as source files mentioned in bower.json file's main property (dependencies both in the project root as well as in the Bower component bower.json file) and injects the dependencies __in the right order__.
    * If the bower.json file of a dependency does not mention files you need to include you can set overrides in your project's bower.json file.
    * The npm module is wiredep
- inject
    * This is similar to wiredep except that it injects our JS and CSS files into HTML documents
    * The npm module is gulp-inject
- nodemon
    * The npm module is gulp-nodemon

## Gulp
Gulp is a task runner for Node.js apps. Being a task runner, it seeks to automate front-end web development tasks and make it more productive. It is based on Node.js streams. The output from one task is available as a stream and can be piped out to another task that consumes it.

Gulp also comes with a CLI that makes working wth Gulp easier.

### Installing and running Gulp
Gulp is available as an npm module. Install using
```
$ npm install --save-dev gulp
```
You may also install gulp globally.
  
To run Gulp, create a gulpfile.js in the project folder, and execute the tool from the project folder like so. The gulpfile.js file uses the gulp module API to configure different tasks to be run.
```
$ gulp
```
  
To run a particular task use
```
$ gulp <task>
```
where __&lt;task&gt;__ is the name of the task

### Gulpfile
Gulp script is written in gulpfile.js. We shall use JS Hint and JSCS tools in gulp. The tools have configuration files .jshintrc and .jscsrc. These can be downloaded too.

We create a glpfile for the following tasks
- JSHint (gulp-jshint)
- JSCS (gulp-jscs, gul-jscs-stylish)
- Wiredep (wiredep)
- Nodemon (nodemon)

#### Bower components installation
Since we are using wiredep to wire up installed dependencies, Bootstrap may be installed via Bower.
```
$ bower install bootstrap@3.3.7
```
Wiredep would not be able to find bootstrap.css path as the .less files are the source for styles in Bootstrap (as mentioned in its package.json). We would need to add an override to our project's bower.json as below.
```
"overrides": {
      "bootstrap": {
          "main": [
              "dist/js/bootstrap.min.js",
              "dist/css/bootstrap.min.css"
          ]
      }
  }
```

#### Wiredep markers
The markers for including JS and CSS dependencies using wiredep are
```
    <!-- bower:css -->
    <!-- endbower -->
```
and
```
    <!-- bower:js -->
    <!-- endbower -->
```

#### Steps to configure Gulp
1. Include required modules. For wiredep we require stream object of wiredep module.
2. Use gulp.task() to create a style task. Use gulp.src() to generate a stream of required files and pipe to jshint, jshint.reporter( 'jshint-stylish' ) (with option verbose: true ), jscs and stylish. Return the stream.
3. Create task stylish to run .ejs files with wiredep comments through wiredep. Set destination (gulp.dest() stream) as same folder.
4. Define serve task that runs style and inject in parallel. Run nodemon with following options and listen for 'restart' event to log a message on restart.
    ```
    let options = {
        script: 'index.js',
        delayTime: 1, // wait for a second
        env: {
            PORT: 4000,
            SESSION_SECRET: 'secret'
        },
        watch: [
            '*.js',
            'api/**/*.js',
            'init/**/*.js',
            'public/**/*.js',
            'server/**/*.js',
            'utils/**/*.js'
        ]
    }
    ```

## Continuous Integration
When working in reasonably large teams, it becomes nightmare ensure code does not break after changes from various developers are merged. Continuous Integration is a practice where test are performed either before merging code or after or both. Usually code is integrated several times a day and automated tests are run on a build server. Typically this happens after every commit to a branch on Git. Once the build is complete, concerned developers are usually notified (via Email, Messaging apps etc.).

Developers are forced to be rigorous in testing their code, and the build catches any regression or integration bugs right away. Developers are expected to make regular (read daily) commits to the baseline (master/feature branch). Also, the build servers can be a clone of the production environment and can catch bugs that do not occur locally.

Some popular CI tools are Travis CI, Circle CI and Jenkins.

A related term is __Continuous Deployment__ whereby the application is pushed to various stages (upto production) once the build and test stage is successfully completed.

## Travis CI
Travis CI (referred to as Travis henceforth) is a Continuous Integration (CI) tool. It remotely executes builds, runs tests based on certain criteria (usually a SCM push). It integrates well with many SCM repos like GitHub, GitLab etc. Travis can be integrated for free with public repos on GitHub. For private repos it is a paid service.

### Configuration
Projects integrated with Travis need a .travis.yml configuration file. It contains details about the environment on which to run the tests, Node version etc. Setup of the configuration will vary from one platform to another. Add one to your project root folder as the first step.

To integrate Travis with GitHub you need a Travis account. Once logged in to Travis site, you can choose your repo and opt for integration. Following this, every Git push will result in Travis running.

### Travis configuration file validation
The .travis.yml file can be validated [online](http://lint.travis-ci.org/) or using a tool that can be installed and run as mentioned [here](https://docs.travis-ci.com/user/travis-lint)

## References
* [Gulp site](https://gulpjs.com/)
* [Article on Continuous Integration](https://codeship.com/continuous-integration-essentials)
* [Travis CI site](https://travis-ci.org/)