var palindromeTest = require('../palindromes');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Palindrome', function() {
    context('given word of foot', function() {
      it('returns false', function() {
        var result = palindromeTest('foot');
        expect(result).to.equal(false);
      });

  });
});

describe('Testing Palindrome', function() {
    context('given word of ablewasiereisawelba', function() {
      it('returns true', function() {
        var result = palindromeTest('ablewasiereisawelba');
        expect(result).to.equal(true);
      });

  });
});
