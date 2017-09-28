var subway = require('../subway');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Subway', function() {
    context('given an array of customers per day and location rent for each location', function() {
      it('returns the most profitable location', function() {
        var result = subway([42, 50, 38, 52, 28], [200, 250, 175, 300, 275]);
        expect(result).to.equal(1);
      });

  });
});
