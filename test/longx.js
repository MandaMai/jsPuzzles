var longx = require('../longx');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Longx', function() {
    context('given string pxxicxxxklerxxxxick', function() {
      it('returns 4 as the longest collection of x in a row', function() {
        var result = longx('pxxicxxxklerxxxxick');
        expect(result).to.equal(4);
      });

  });
});

describe('Testing Longx', function() {
    context('given string pxxxxicxxxklerxxick', function() {
      it('returns 4 as the longest collection of x in a row', function() {
        var result = longx('pxxxxicxxxklerxxick');
        expect(result).to.equal(4);
      });

  });
});
