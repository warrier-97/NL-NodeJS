/**
 * Mocha API:
 * describe() separates out tests into separate sections. You can nest describe when you want "sub-sections"
 * it() represents a test case
 * before(), beforeEach(), after(), afterEach() are hooks to run before/after first/each it() or describe()
 * 
 * Chai API:
 * assert, expect() and should are 3 styles for performing assertions. They are equally capable but you can choose one depending on your preference
 * assert() is TDD style and expect() and should are BDD style
 * This reference may help: https://stackoverflow.com/questions/21396524/what-is-the-difference-between-assert-expect-and-should-in-chai
 * 
 * Note:
 * 1. By convention test names start with the word 'should'
 * You SHOULD NOT use arrow functions in Mocha as such function's context (this) will be different from the Mocha context - these functions cannot access Mocha context-specific methods like timeout() 
 */
'use strict';

const chai = require( 'chai' ),
      expect = chai.expect,
      assert = chai.assert;

const isEven = require( './modules/predicates' ).isEven;
      
// Note: This line is necessary to setup should style assertions
chai.should();

// individual test
it( 'should return true when number is even', function() {
    // should style
    isEven(4).should.be.true;
});

// group tests into a test suite using describe()
describe( 'isEven', function() {
    it( 'should return true when number is even', function() {
        // should style
        isEven(4).should.be.true;
    });

    it( 'should return false when number is odd', function() {
        // assert style
        assert.isFalse( isEven( 5 ) );
    });

    it( 'should throw an TypeError when argument is not a number', function() {
        // expect style
        // Note: If you need to assert that your function fn throws when passed certain arguments, then wrap a call to fn inside of another function.
        expect( function() {
            isEven( 2.3 );
        }).to.throw( TypeError );
    });
});