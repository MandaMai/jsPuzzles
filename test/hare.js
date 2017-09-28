var makinBunnies = require('../hare');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Makin Bunnies', function() {
    context('given the starting population of 200, birthrate or .1 and number of week of 5', function() {
      it('returns X as the number of bunnies', function() {
        var bunnies = makinBunnies(200, .1, 5);
        expect(bunnies).to.equal(322.102);
      });

  });
});
