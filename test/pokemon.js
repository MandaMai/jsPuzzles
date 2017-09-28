var pokemonTest = require('../pokemon');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Pokemon', function() {
    context('accept array of numbers and add them together up to each number in returning array', function() {
      it('returns array of numbers based on the array sent to the method', function() {
        var pokemonTemp = pokemonTest([1,2,3]);
        console.log(pokemonTemp);
        expect(pokemonTemp).to.eql([1,3,6]);
      });

  });
});
