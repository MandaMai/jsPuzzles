var descendingTest = require('../descending');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Descending', function() {
    context('given a number of 42937', function() {
      it('returns 97432', function() {
        var result = descendingTest(42937);
        expect(result).to.equal(97432);
      });

  });
});
