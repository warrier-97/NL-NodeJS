/**
 * We can skip execution of test suites (tests grouped by describe) and tests using skip(). This helps maintain the code for our test case(s) and simply skip execution. This is also an indicator for work we may have marked for future - the reporter marks such tests as "pending" to serve as reminder.
 * 
 * For a test suite there is xdescribe() that is short for describe.skip()
 * For a test there is xit() that is short for it.skip()
 * 
 * Instructions:
 * 1. Try xdescribe() instead of describe() to skip a test-suite. You can also use describe.skip()
 * 2. Try xit() instead of it() to skip a test. You can also use it.skip()
 */
'use strict';

const chai = require( 'chai' ),
      expect = chai.expect,
      assert = chai.assert;

const sum = require( './modules/arithmetic' ).sum;
      
chai.should();

describe( 'test sum function (incorrect setup for demo)', function() {
    var num = 5;

    it( 'should return 10 when 5 is added to num', function() {
        num = sum( num, 5 );
        num.should.equal( 10 );
    });

    it( 'should return 15 when 10 is added to num', function() {
        sum( num, 10 ).should.equal( 15 );
    });
});

describe( 'test sum function (correct setup for demo)', function() {
    var num;

    beforeEach(function() {
        num = 5;
    });

    it( 'should return 10 when 5 is added to num', function() {
        num = sum( num, 5 );
        num.should.equal( 10 );
    });

    it( 'should return 15 when 10 is added to num', function() {
        sum( num, 10 ).should.equal( 15 );
    });
});