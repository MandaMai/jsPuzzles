var greaterthan = require('../greaterthan');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Greater Than', function() {
    context('given the values of 2 and 40', function() {
      it('returns true', function() {
        var result = greaterthan(2,40);
        expect(result).to.equal(true);
      });

  });
});

describe('Testing Greater Than', function() {
    context('given the values of 40 and 2', function() {
      it('returns false', function() {
        var result = greaterthan(40,2);
        expect(result).to.equal(false);
      });

  });
});