var sum = require('../sum');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Sum', function() {
    context('given the values of 40 and 2', function() {
      it('returns 42', function() {
        var sumTest = sum(40,2);
        expect(sumTest).to.equal(42);
      });

  });
});

