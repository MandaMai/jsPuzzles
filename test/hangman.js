var hangmanTest = require('../hangman');
var countCheck = require('../hangman');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Hangman', function() {
    context('given letter of a', function() {
      it('returns response string: ', function() {
        var result = hangmanTest('a');
        expect(result).to.eql("Nope, that letter doesn't exist in my word");
      });
  });
});

describe('Testing Hangman', function() {
    context('given letter of c', function() {
      it('returns response string:', function() {
        var result = hangmanTest('c');
        expect(result).to.eql("Yeah, the letter c exists 2 times in my word");
      });
  });
});

describe('Testing Hangman', function() {
    context('given letter of e', function() {
      it('returns response string: ', function() {
        var result = hangmanTest('e');
        expect(result).to.eql("Yeah, the letter e exists 1 time in my word");
      });
  });
});




