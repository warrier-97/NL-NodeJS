# Reference for various topics

__Unit testing__ tests out individual pieces of functionality like a function or method call.

__Integration tests__ test the working of more than one unit of code, when they function together.

Unit tests are simpler to code and faster to execute. They give quick feedback. Integration tests are comprehensive but take time to code, run and maintain. To get the best of both worlds, we test individual units of code and provide mock implementations of API, methods etc. that fall outside the unit of code. Mock implementations run faster, are easier to setup and teardownn and hence preferred. For example, how would you clear the databse for every test case?!!.

## Advantages of Testing
- Confidence in code
- Prevents regression
- Enforces better coding as code needs to be modular and interfaces simple in order to be testable
- Tests are like documentation for code

In the long run unit tests are a proven way to save costs.

## Tools for Unit Testing
* Mocha
    - Testing framework for Node.js
    - Behavior-Driven Development (BDD) syntax - follows pattern of natural language and makes design specifications and test cases use similar language. BDD is an off-shoot of Test-Driven Development (TDD) where tests are written first (where they will fail) and then code.
    - Simplifies testing of asynchronous functions
    - Tests run serially
    - npm module is mocha - install globally
* Chai
    - Assertion library
    - Also uses BDD syntax
    - npm module is chai - install locally
* Sinon
    - Mocking library for JS
    - npm module is sinon - install locally
* Gulp
    - We use as task runner for tests
    - npm module is gulp - install globally

## Running Mocha tests
Once Mocha is installed globally you can use it to run tests. Use this to run tests scripts like so
```
$ mocha path/to/script1 path/to/script2 ...(specify as many files as you want)
```

You can also run all test scripts within a folder using
```
$ mocha path/to/folder
```

To run tests when scripts change (i.e. ask Mocha to watch for changes) run the mocha tool like so
```
$ mocha --watch path/to/folder
```
or
```
$ mocha -w path/to/folder
```

## Sinon
Sinon is a testing utility that provides test spies, stubs and mocks for JavaScript.

Sinon spies help test if the callback, for a function with callback, gets called. Sinon can track if the callback was called, how many times it was called, and the arguments passed in each invocation.

Sinon stubs duplicate entire objects to create mock objects (not to be confused with, a related, but different, mock feature of Sinon). These are helpful especially when a method uses other dependencies for its functioning. Instead of actually using these dependencies in testing, we mock them using a stub. Stubs play well with classes that have dependencies injected into them (which is a good practice).

## References
* [Mocha](https://mochajs.org/)
* [Chai](http://chaijs.com/)
* [Sinon](http://sinonjs.org/)
* [Tutorial on Spies, Stubs and Mocks in Sinon](https://solidgeargroup.com/unit-tests-javascript-sinon)

