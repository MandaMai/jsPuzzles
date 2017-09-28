var guesswho = require('../guesswho');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Guess Who', function() {
    context('given a set of functions', function() {
      it('return the numbers from 1-100 that are true for the functions passed', function() {
        let funcs = [
            function big(x) { return x > 80; },
            function odd(x) { return x % 2 === 1; },
          ];
        var result = guesswho(funcs);
        expect(result).to.eql([81, 83, 85, 87, 89, 91, 93, 95, 97, 99] );
      });

  });
});