'use strict';

const chai = require( 'chai' ),
      expect = chai.expect,
      assert = chai.assert;

const isEven = require( './modules/predicates' ).isEven;
const sum = require( './modules/arithmetic' ).sum;

chai.should();

describe( 'predicate function tests', function() {
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
});

describe( 'operator tests', function() {
    describe( 'test sum function (incorrect setup for demo)', function() {
        var num = 5;

        it( 'should return 10 when 5 is added to num', function() {
            num = sum( num, 5 ); // note that we have modified num here - not a good practice as it affects other tests
            num.should.equal( 10 );
        });

        it( 'should return 15 when 10 is added to num', function() {
            sum( num, 10 ).should.equal( 15 );
        });
    });

    describe( 'test sum function (correct setup for demo)', function() {
        var num;

        // setup test case using beforeEach()
        // the function passed to beforeEach() runs right before each test case runs (i.e. before it() executes its test case)
        beforeEach(function() {
            num = 5;
        });

        // Exercise: There is a function afterEach() that executes right after every test case runs. Explore this.

        it( 'should return 10 when 5 is added to num', function() {
            num = sum( num, 5 ); // note that we have modified num here - though this is not a good practice, the setup method ensures we start from a common baseline each time
            num.should.equal( 10 );
        });

        it( 'should return 15 when 10 is added to num', function() {
            sum( num, 10 ).should.equal( 15 );
        });
    });
});