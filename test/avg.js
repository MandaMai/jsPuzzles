var avg = require('../avg');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Avg', function() {
    context('given the values of 40 and 2 and 12', function() {
      it('returns 42', function() {
        var avgTest = avg(40,2, 12);
        expect(avgTest).to.equal(18);
      });

  });
});