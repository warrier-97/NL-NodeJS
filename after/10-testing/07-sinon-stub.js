const chai = require( 'chai' ),
      expect = chai.expect;
const sinon = require( 'sinon' );

const Product = require( './modules/product' );
const http = require( './modules/http' );

chai.should();


describe( 'product.updateName tests', function() {
    let mockHttp, product;

    beforeEach(function() {
        mockHttp = sinon.stub( http );
        product = new Product( 1, 'Parachute Coconut Oil', [ 'Oils' ], http );
    });

    it( 'should post the new name to the backend', function() {
        product.updateName( 'Parachute Coconut Hair Oil' );
        mockHttp.put.called.should.be.true;
    });
});