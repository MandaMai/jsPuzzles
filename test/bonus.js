var bonus = require('../bonus');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Sum', function() {
    context('given the value of 41.20', function() {
      it('returns 42', function() {
        var result = bonus(41.20);
        expect(result).to.equal(50);
      });

  });
});