var nicknameTest = require('../nickname');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Nickname', function() {
    context('given the name of Amanda and the nickname of Manda', function() {
      it('returns true', function() {
        var result = nicknameTest("Amanda", "Manda");
        expect(result).to.equal(true);
      });

  });
});

describe('Testing Nickname', function() {
    context('given the name of Amanda and the nickname of Fred', function() {
      it('returns false', function() {
        var result = nicknameTest("Amanda", "Fred");
        expect(result).to.equal(false);
      });

  });
});